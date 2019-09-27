import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {Router} from '@angular/router';
import {ListDepartementResponse} from '../../../../../models/departement.model';
import {ListExerciceResponse} from '../../../../../models/exercice.model';

@Component({
  selector: 'app-programme-add',
  templateUrl: './programme-add.component.html',
  styleUrls: ['./programme-add.component.css']
})
export class ProgrammeAddComponent implements OnInit {
  singleSelectOptions: any = [];
  message: string;
  singleSelectValue: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };
  constructor(private  programmeService: ProgrammeService, private utilService: UtilsService, private exerciceService: ExercieService, private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.singleSelectValue = 'Exercice 2007';
    this.exerciceService.getExerciceList()
      .subscribe((res: ListExerciceResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptions.push({
            label: exo.denomination,
            value: exo.identifiant,
            code: exo.identifiant
          });
        });
      });
  }
  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue);
    this.programmeService.createProgramme(form.value['code'], form.value['libelle'], form.value['poids'], +this.singleSelectValue)
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/programmes/load']);
      } , (error: ErrorResponse) => {
        console.log(error.error['error']);
        // tslint:disable-next-line:forin
        for (const key in error.error['error']) {
            console.log(key);
            if (key !== 'error') {
              console.log(error.error['error'][key]);
            this.message = error.error['error'][key];
            break;
            }
        }
        this.router.navigate(['/dashboard/fichier/base/programmes/add']);
      });
  }

}
