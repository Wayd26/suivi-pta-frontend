import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as XLSX from 'xlsx';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {Router} from '@angular/router';
import {Exercice, ListExerciceResponse} from '../../../../../models/exercice.model';
import {ProgrammeResponse} from '../../../../../models/programme.model';

@Component({
  selector: 'app-programme-import',
  templateUrl: './programme-import.component.html',
  styleUrls: ['./programme-import.component.css']
})
export class ProgrammeImportComponent implements OnInit {

  arrayBuffer: any;
  file: File;
  message: String = '';
  exercices: Exercice[];
  dataNumber = 0;
  constructor(private  programmeService: ProgrammeService, private utilService: UtilsService, private router: Router, private exerciceService: ExercieService) { }

  ngOnInit() {
    this.exerciceService.getExerciceList()
      .subscribe((res: ListExerciceResponse) => {
        this.exercices = res.data;
      });
  }
  onSubmit(form: NgForm) {
    const input = document.getElementById('input');
    console.log(form.value);
    console.log(input.innerHTML);
  }
  getExoId(libelle) {
   const exo = this.exercices.find((e) => {
     console.log(e.denomination);
     console.log(libelle);
      return e.denomination === libelle;
    });
    return exo.identifiant;
  }
  public fileEvent($event) {
    const fileSelected = $event.target.files[0];
    console.log(fileSelected);
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
        this.programmeService.createProgramme(i['libelle'], i['poids'], +this.getExoId(i['_exercice']))
          .subscribe((resp) => {
            console.log(resp);

          } , (error) => {
            console.log(error);
            this.message = 'Echec de l\'operation';
            //this.router.navigate(['/dashboard/fichier/base/programmes/import']);
          });
        if (this.dataNumber === info.length) {
          this.router.navigate(['/dashboard/fichier/base/programme/load']);
        }
      }
    );
      console.log(info[0]['identifiant']);
    };
    fileReader.readAsArrayBuffer(this.file);

  }

}
