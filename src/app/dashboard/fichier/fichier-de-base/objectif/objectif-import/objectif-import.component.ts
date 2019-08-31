import { Component, OnInit } from '@angular/core';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {ListProgrammeResponse, Programme} from '../../../../../models/programme.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-objectif-import',
  templateUrl: './objectif-import.component.html',
  styleUrls: ['./objectif-import.component.css']
})
export class ObjectifImportComponent implements OnInit {

  programmes: Programme[];

  arrayBuffer: any;
  file: File;
  message: String = '';
  dataNumber = 0;
  constructor(private objService: ObjectifService, private router: Router, private utils: UtilsService, private progra: ProgrammeService) { }

  ngOnInit() {
    this.progra.getProgrammeList()
      .subscribe((res: ListProgrammeResponse) => {
        this.programmes = res.data;
      });
  }
  getProgrammeId(libelle) {
    const prog = this.programmes.find((e) => {
      return e.libelle === libelle;
    });
    return prog.identifiant;
  }
  incomingfile($event) {
    this.file = $event.target.files[0];
  }

  Upload() {
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
          this.objService.createObjectif(i['libelle'], +this.getProgrammeId(i['_programme']))
            .subscribe((resp) => {
              console.log(resp);

            } , (error) => {
              console.log(error);
              this.message = 'Echec de l\'operation';
              //this.router.navigate(['/dashboard/fichier/base/programmes/import']);
            });
          console.log(this.dataNumber + '===' + info.length);
          if (this.dataNumber === info.length) {
            this.router.navigate(['/dashboard/fichier/base/objectif/load']);
          }
        }
      );
      console.log(info[0]['identifiant']);
    };
    fileReader.readAsArrayBuffer(this.file);

  }

}
