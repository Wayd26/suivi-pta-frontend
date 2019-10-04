import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SuiviTache, SuiviTachePesponse} from '../../../../models/suivi_tache.model';
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
  singleSelectValueStructure: string[] = ['reactJS'];
  singleSelectValueActivite: string[] = ['reactJS'];
  singleSelectValueExercice: string[] = [];
  singleSelectValueTache: string[] = ['reactJS'];
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
    this.progTache.getSuiviTache(+this.route.snapshot.params['id']).subscribe((res: SuiviTachePesponse) => {
      this.suiviTache = res.data;
      console.log(res.data);

      this.singleSelectValueActivite = [this.utilService.getIdData(res.data.links, 'acivite')];
      console.log(this.utilService.getIdData(res.data.links, 'acivite'));

      this.singleSelectValueTache = [this.utilService.getIdData(res.data.links, 'tache')];
      console.log(this.utilService.getIdData(res.data.links, 'tache'));
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
    // this.id = +this.route.snapshot.params['id'];
    // this.progTache.getSuiviTache(+this.route.snapshot.params['id']).subscribe((res: SuiviTachePesponse) => {
    //   this.suiviTache = res.data;
    //
    //   this.singleSelectValueActivite = [this.suiviTache.links[2]._activite];
    //   this.singleSelectValueTache = [this.suiviTache.links[0]._tache];

    //});


  }
 onSubmit(form: NgForm){
   this.progTache.updateSuiviTache(this.singleSelectValueActivite[0], this.singleSelectValueTache[0], this.utilService.changeDateFornat(this.utilService
     .getDate(this.dateDebut.year, this.dateDebut.month, this.dateDebut.day)),  this.utilService.changeDateFornat(this.utilService
     .getDate(this.dateFin.year, this.dateFin.month, this.dateFin.day)), form.value['montant_tache'], form.value['poids_tache'], this.id)
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
       this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches/edit/' + this.id]);
     });
  }

}
