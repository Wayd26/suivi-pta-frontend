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

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = ['reactjs'];
  constructor(private  programmeService: ProgrammeService, private utilService: UtilsService, private exerciceService: ExercieService, private router: Router) { }

  ngOnInit() {
    this.message = '';
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
    this.programmeService.createProgramme(form.value['libelle'], form.value['poids'], +this.utilService.getElementId(this.singleSelectOptions, this.singleSelectValue))
      .subscribe((resp) => {
        this.router.navigate(['/dashboard/fichier/base/programmes']);
      } , (error) => {
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/programmes/add']);
      });
  }

}
