import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SuiviTache, SuiviTacheResponse} from '../../../../models/suivi_tache.model';
import {ActivatedRoute, Router} from '@angular/router';
import {SuiviTacheService} from '../../../../shared/services/suivi-tache.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ListTacheResponse} from '../../../../models/tache.model';
import {ListActiviteResponse} from '../../../../models/activite.model';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {StructureService} from '../../../../shared/services/structure.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {TacheService} from '../../../../shared/services/tache.service';

@Component({
  selector: 'app-suivi-pta-edit',
  templateUrl: './suivi-pta-edit.component.html',
  styleUrls: ['./suivi-pta-edit.component.css']
})
export class SuiviPtaEditComponent implements OnInit {

  singleSelectOptionsStructure: any = [];
  singleSelectOptionsActivite: any = [];
  singleSelectOptionsTache: any = [];
  singleSelectOptionsExercice: any = [];
  message: string;
  singleSelectValueStructure: string[] = [];
  singleSelectValueActivite: string[] = [];
  singleSelectValueExercice: string[] = [];
  singleSelectValueTache: string[] = [];
  suiviTache: SuiviTache;
  id: number;
  dateFinReal;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['value']
  };

  constructor( private utilService: UtilsService, private router: Router, private route: ActivatedRoute, private suiviPTAServ: SuiviTacheService, private exerciceService: ExercieService, private structureService: StructureService, private activiteService: ActiviteService, private tacheService: TacheService) { }

  ngOnInit() {



    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.suiviPTAServ.getSuiviTache(+this.route.snapshot.params['id']).subscribe((res: SuiviTacheResponse) => {
     this.suiviTache = res.data;
      console.log(res);

      this.singleSelectValueActivite = [this.utilService.getIdData(this.suiviTache.links, '_acivite')];
      console.log(this.utilService.getIdData(this.suiviTache.links[2], 'acivite'));

      // this.singleSelectValueTache = [this.utilService.getIdData(this.suiviTache.links, '_tache')];
      // console.log(this.utilService.getIdData(this.suiviTache.links[0], 'tache'));
    });

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
  }
  onSubmit(form: NgForm){
    this.suiviPTAServ.updateSuiviPTA(this.singleSelectValueActivite[0], this.singleSelectValueTache[0], form.value['toggle1'],  this.utilService.changeDateFornat(this.utilService
      .getDate(this.dateFinReal.year, this.dateFinReal.month, this.dateFinReal.day)), form.value['commentaire'], this.id)
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches']);
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
        this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches/edit:' + this.id ]);
      });
  }

}
