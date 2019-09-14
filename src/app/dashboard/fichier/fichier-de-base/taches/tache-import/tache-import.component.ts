import { Component, OnInit } from '@angular/core';
import {TacheService} from '../../../../../shared/services/tache.service';
import {Router} from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tache-import',
  templateUrl: './tache-import.component.html',
  styleUrls: ['./tache-import.component.css']
})
export class TacheImportComponent implements OnInit {

  arrayBuffer: any;
  file: File;
  message: String = '';
  dataNumber = 0;
  constructor(private tacheService: TacheService, private router: Router) { }

  ngOnInit() {
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
          this.tacheService.createTache(i['code'], i['libelle'])
            .subscribe((resp) => {
              console.log(resp);

            } , (error) => {
              console.log(error);
              this.message = 'Echec de l\'operation';
              //this.router.navigate(['/dashboard/fichier/base/programmes/import']);
            });
          console.log(this.dataNumber + '===' + info.length);
          if (this.dataNumber === info.length) {
            this.router.navigate(['/dashboard/fichier/base/tache/load']);
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
