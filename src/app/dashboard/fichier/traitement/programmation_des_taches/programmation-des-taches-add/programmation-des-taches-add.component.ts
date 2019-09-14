import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VilleService} from '../../../../../shared/services/ville.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {ListDepartementResponse} from '../../../../../models/departement.model';
import {NgForm} from '@angular/forms';
import {SuiviTacheService} from '../../../../../shared/services/suivi-tache.service';
import {StructureService} from '../../../../../shared/services/structure.service';
import {ActiviteService} from '../../../../../shared/services/activite.service';
import {TacheService} from '../../../../../shared/services/tache.service';
import {ListStructureResponse} from '../../../../../models/structure.model';
import {ListActiviteResponse} from '../../../../../models/activite.model';
import {ListTacheResponse} from '../../../../../models/tache.model';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {ListExerciceResponse} from '../../../../../models/exercice.model';

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
    // this.structureService.getStructureList()
    //   .subscribe((res: ListStructureResponse) => {
    //     res.data.map((structure) => {
    //       this.singleSelectOptionsStructure.push({
    //         label: structure.denomination,
    //         value: structure.identifiant,
    //         code: structure.identifiant
    //       });
    //     });
    //   });
    this.activiteService.getActiviteList()
      .subscribe((res: ListActiviteResponse) => {
      res.data.map((activite) => {
        this.singleSelectOptionsActivite.push({
          label: activite.libelle,
          value: activite.identifiant,
          code: activite.identifiant
        });
      });
    });

    this.tacheService.getTacheList()
      .subscribe((res: ListTacheResponse) => {
        res.data.map((tache) => {
          this.singleSelectOptionsTache.push({
            label: tache.libelle,
            value: tache.identifiant,
            code: tache.identifiant
          });
        });
      });

    // this.exerciceService.getExerciceList()
    //   .subscribe((res: ListExerciceResponse) => {
    //     res.data.map((exercice) => {
    //       this.singleSelectOptionsExercice.push({
    //         label: exercice.denomination,
    //         value: exercice.identifiant,
    //         code: exercice.identifiant
    //       });
    //     });
    //   });
  }
  onSubmit(form: NgForm) {
    this.progTache.createSuiviTache(+this.singleSelectValueActivite, this.singleSelectValueTache[0], form.value['date_debut_tache'],  form.value['date_fin_tache'], form.value['montant_tache'], form.value['poids_tache'])
      .subscribe((resp) => {
        this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches']);
      } , (error) => {
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches/add']);
      });
  }

}
