import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SuiviTache, SuiviTacheResponse} from '../../../../models/suivi_tache.model';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SuiviTacheService} from '../../../../shared/services/suivi-tache.service';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {TacheService} from '../../../../shared/services/tache.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {StructureService} from '../../../../shared/services/structure.service';
import {ListActiviteResponse} from '../../../../models/activite.model';
import {ListTacheResponse} from '../../../../models/tache.model';


@Component({
  selector: 'app-programmation-des-taches-edit',
  templateUrl: './programmation-des-taches-edit.component.html',
  styleUrls: ['./programmation-des-taches-edit.component.css']
})
export class ProgrammationDesTachesEditComponent implements OnInit {


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
  dateDebut;
  dateFin;

  singleSelectConfig: any = {
      labelField: 'label',
    valueField: 'value',
    searchField: ['value']
  };

  constructor( private utilService: UtilsService, private router: Router, private route: ActivatedRoute, private progTache: SuiviTacheService, private exerciceService: ExercieService, private structureService: StructureService, private activiteService: ActiviteService, private tacheService: TacheService) { }

  ngOnInit() {


    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.progTache.getSuiviTache(+this.route.snapshot.params['id']).subscribe((res: SuiviTacheResponse) => {
      this.suiviTache = res.data;

      this.singleSelectValueActivite = [this.utilService.getIdData(res.data.links, 'activity')];
      console.log('Ici nous avons l activité : ' + this.utilService.getIdData(res.data.links, 'activity'));

      // this.singleSelectValue = [this.utils.getIdData(res.data.links, 'action')];


      this.singleSelectValueTache = [this.utilService.getIdData(res.data.links, 'task')];
      console.log('Ici nous avons la tache : ' + this.utilService.getIdData(res.data.links, 'task'));

      this.dateDebut = new Date(res.data.started_on);
      this.dateFin = new Date(res.data.ended_on);


      const dateDebutSplit = res.data.started_on.split('-');
      const dateFinSplit = res.data.ended_on.split('-');
      this.dateDebut = {year: +dateDebutSplit[0], month: +dateDebutSplit[1], day: +dateDebutSplit[2]};
      this.dateFin = {year: +dateFinSplit[0], month: +dateFinSplit[1], day: +dateFinSplit[2]};
      console.log(res.data);

    });

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
 onSubmit(form: NgForm){

   const debDate = new Date(this.dateDebut.year, this.dateDebut.month - 1, this.dateDebut.day);
   const finDate = new Date(this.dateFin.year, this.dateFin.month - 1, this.dateFin.day);

   this.progTache.updateSuiviTache(+this.singleSelectValueActivite, +this.singleSelectValueTache, this.utilService.dateToString(debDate),  this.utilService.dateToString(finDate), form.value['montant_tache'], form.value['poids_tache'], false, this.id)
     .subscribe((resp) => {
       this.utilService.notifModif_OK();
       this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches/load']);
     } , (error: ErrorResponse) => {
       console.log(error);
       console.log(error.error['error']);
       this.utilService.notifModif_Error();
       this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches/edit/' + this.id]);
     });
  }

}
