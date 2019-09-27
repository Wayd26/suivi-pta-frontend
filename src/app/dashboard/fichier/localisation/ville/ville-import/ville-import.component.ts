import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VilleService} from '../../../../../shared/services/ville.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {Departement, ListDepartementResponse} from '../../../../../models/departement.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ville-import',
  templateUrl: './ville-import.component.html',
  styleUrls: ['./ville-import.component.css']
})
export class VilleImportComponent implements OnInit {

  arrayBuffer: any;
  file: File;
  message: String = '';
  dataNumber = 0;
  departement: Departement[];
  constructor(private router: Router, private villeService: VilleService,
    private utilservice: UtilsService, private departementService: DepartementService) { }

  ngOnInit() {
    this.departementService.getDepartementList()
      .subscribe((res: ListDepartementResponse) => {
        this.departement = res.data;
      });
  }

  getDepartementId(libelle) {
    console.log(libelle);
    const vil = this.departement.find((e) => {
      return e.denomination === libelle;
    });
    console.log(vil);
    return vil !== undefined ? vil.identifiant : 0;
  }
  incomingfile($event) {
    this.file = $event.target.files[0];
  }

  Upload() {
    if (this.file.name.endsWith('.xlsx')) {
      this.UploadExcel();
    } else if (this.file.name.endsWith('.csv')) {
      this.uploadListener();
    }
  }

  UploadExcel() {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      // tslint:disable-next-line:triple-equals
      for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, {type: 'binary'});
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      const info = XLSX.utils.sheet_to_json(worksheet, {raw: true});
      info.map((i) => {
          this.dataNumber += 1;
          this.villeService.createVille(i['code'], i['denomination'], +this.getDepartementId(i['_departement']))
            .subscribe((resp) => {
              console.log(resp);

            } , (error) => {
              console.log(error);
              this.message = 'Echec de l\'operation';
            });
          console.log(this.dataNumber + '===' + info.length);
          if (this.dataNumber === info.length) {
            this.router.navigate(['/fichier/localisation/ville/load']);
          }
        }
      );
      console.log(info[0]['identifiant']);
    };
    fileReader.readAsArrayBuffer(this.file);

  }
  uploadListener(): void {

    const reader = new FileReader();
    reader.readAsText(this.file);
    reader.onload = () => {
      const csvData = reader.result;
      const csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

      const headersRow = this.getHeaderArray(csvRecordsArray);

      this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
    };

    reader.onerror = function () {
      console.log('error is occured while reading file!');
    };
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    const csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      const curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length === headerLength) {
        /*const csvRecord: CSVRecord = new CSVRecord();
        csvRecord.id = curruntRecord[0].trim();
        csvRecord.firstName = curruntRecord[1].trim();
        csvRecord.lastName = curruntRecord[2].trim();
        csvRecord.age = curruntRecord[3].trim();
        csvRecord.position = curruntRecord[4].trim();
        csvRecord.mobile = curruntRecord[5].trim();
        csvArr.push(csvRecord);*/
        this.dataNumber += 1;
          this.villeService.createVille(curruntRecord[0].trim(), curruntRecord[1].trim(),
          +this.getDepartementId(curruntRecord[0].trim()))
            .subscribe((resp) => {
              console.log(resp);

            } , (error) => {
              console.log(error);
              this.message = 'Echec de l\'operation';
              //this.router.navigate(['/dashboard/fichier/base/programmes/import']);
            });
          console.log(this.dataNumber + '===' + csvRecordsArray.length);
          if (this.dataNumber === csvRecordsArray.length) {
            this.router.navigate(['/fichier/localisation/ville/load']);
          }
        console.log(curruntRecord);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    const headers = (<string>csvRecordsArr[0]).split(',');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

}
