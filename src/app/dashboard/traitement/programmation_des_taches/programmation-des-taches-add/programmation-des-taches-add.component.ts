import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SuiviTacheService} from '../../../../shared/services/suivi-tache.service';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {TacheService} from '../../../../shared/services/tache.service';
import {StructureService} from '../../../../shared/services/structure.service';
import {ListTacheResponse} from '../../../../models/tache.model';
import {ListActiviteResponse} from '../../../../models/activite.model';


@Component({
  selector: 'app-programmation-des-taches-add',
  templateUrl: './programmation-des-taches-add.component.html',
  styleUrls: ['./programmation-des-taches-add.component.css']
})
export class ProgrammationDesTachesAddComponent implements OnInit {

  singleSelectOptionsExercice: any = [];
  singleSelectOptionsStructure: any = [];
  singleSelectOptionsActivite: any = [];
  singleSelectOptionsTache: any = [];
  message: string;
  started_on;
  ended_on;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValueExercice: string[] = [];
  singleSelectValueStructure: string[] = [];
  singleSelectValueActivite: string[] = [];
  singleSelectValueTache: string[] = [];
  constructor(private router: Router, private progTache: SuiviTacheService, private exerciceService: ExercieService, private utilservice: UtilsService, private structureService: StructureService, private activiteService: ActiviteService, private tacheService: TacheService) { }

  ngOnInit() {
    this.message = '';

    this.activiteService.getActiviteList()
      .subscribe((res: ListActiviteResponse) => {
      res.data.map((activite) => {
        this.singleSelectOptionsActivite.push({
          label: activite.denomination,
          value: activite.id.toString(),
          code: activite.code
        });
      });
    });

    this.tacheService.getTacheList()
      .subscribe((res: ListTacheResponse) => {
        res.data.map((tache) => {
          this.singleSelectOptionsTache.push({
            label: tache.denomination,
            value: tache.id.toString(),
            code: tache.code
          });
        });
      });


  }
  onSubmit(form: NgForm) {
    const debDate = new Date(this.started_on.year, this.started_on.month - 1, this.started_on.day);
    const finDate = new Date(this.ended_on.year, this.ended_on.month - 1, this.ended_on.day);
    this.progTache.createSuiviTache(+this.singleSelectValueActivite, +this.singleSelectValueTache,
    this.utilservice.dateToString(debDate), this.utilservice.dateToString(finDate),
     form.value['montant_tache'], form.value['poids_tache'], false)
    .subscribe((resp) => {
        this.utilservice.notifAjout_OK();
        this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches/load']);
      } , (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utilservice.notifAjout_Error();
        this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches/add']);
      });
  }
}
