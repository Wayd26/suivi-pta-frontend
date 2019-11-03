import { Component, OnInit } from '@angular/core';
import {ResultatService} from '../../../../../shared/services/resultat.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ActionService} from '../../../../../shared/services/action.service';
import {Router} from '@angular/router';
import {ListeResultatResponse, Resultat} from '../../../../../models/resultat.model';
import * as XLSX from 'xlsx';
import {EXCEL_EXTENSION} from '../../../../../constants/urlConstants';

@Component({
  selector: 'app-action-import',
  templateUrl: './action-import.component.html',
  styleUrls: ['./action-import.component.css']
})
export class ActionImportComponent implements OnInit {
  arrayBuffer: any;
  file: File;
  message: String = '';
  dataNumber = 0;
  resultats: Resultat[];
  constructor(private resultatService: ResultatService,
    private utilService: UtilsService, private actionService: ActionService, private router: Router) { }

  ngOnInit() {
    this.resultatService.getResultatList()
      .subscribe((res: ListeResultatResponse) => {
        console.log(res.data);
        this.resultats = res.data;
      });
    this.message = '';
  }
  getResultatId(libelle) {
    console.log(libelle);
    const vil = this.resultats.find((e) => {
      return e.denomination === libelle;
    });
    console.log(vil);
    return vil !== undefined ? vil.id : 0;
  }
  incomingfile($event) {
    this.file = $event.target.files[0];
  }
  Upload() {
    console.log(this.file.name.split('.').pop());
    console.log(EXCEL_EXTENSION.indexOf(this.file.name.split('.').pop()))
    if (EXCEL_EXTENSION.indexOf(this.file.name.split('.').pop()) !== -1) {
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
          // this.actionService.createAction(i['code'], i['libelle'], +i['poids'], +this.getResultatId(i['_resultat']))
        this.actionService.createAction(i['code'], i['libelle'], +i['poids'], +this.getResultatId(i['_resultat']))
            .subscribe((resp) => {
              console.log(resp);

            } , (error) => {
              console.log(error);
              this.message = 'Echec de l\'operation';
              //this.router.navigate(['/dashboard/fichier/base/programmes/import']);
            });
          console.log(this.dataNumber + '===' + info.length);
          if (this.dataNumber === info.length) {
            this.dataNumber = 0;
            this.router.navigate(['/dashboard/fichier/base/action/load']);
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
          // this.actionService.createAction(i['code'], i['libelle'], +i['poids'], +this.getResultatId(i['_resultat']))
        this.actionService.createAction(curruntRecord[0].trim(), curruntRecord[1].trim(), +curruntRecord[2].trim(),
        +this.getResultatId(curruntRecord[3].trim()))
            .subscribe((resp) => {
              console.log(resp);

            } , (error) => {
              console.log(error);
              this.message = 'Echec de l\'operation';
              //this.router.navigate(['/dashboard/fichier/base/programmes/import']);
            });
          console.log(this.dataNumber + '===' + csvRecordsArray.length);
          if (this.dataNumber === csvRecordsArray.length) {
            this.dataNumber = 0;
            this.router.navigate(['/dashboard/fichier/base/action/load']);
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
