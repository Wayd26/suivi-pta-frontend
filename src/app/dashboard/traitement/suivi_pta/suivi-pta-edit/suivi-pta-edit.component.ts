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

      this.dateFinReal = new Date(res.data.effective_end_date);


      const dateFinRealSplit = res.data.effective_end_date.split('-');
      this.dateFinReal = {year: +dateFinRealSplit[0], month: +dateFinRealSplit[1], day: +dateFinRealSplit[2]};

      this.singleSelectValueActivite = [this.utilService.getIdData(res.data.links, 'activity')];
      console.log(this.utilService.getIdData(res.data.links, 'acivite'));

      this.singleSelectValueTache = [this.utilService.getIdData(res.data.links, 'task')];
      console.log(this.utilService.getIdData(res.data.links, 'tache'));
    });

    this.activiteService.getActiviteList()
      .subscribe((res: ListActiviteResponse) => {
        res.data.map((activite) => {
          this.singleSelectOptionsActivite.push({
            label: activite.denomination,
            value: activite.id,
            code: activite.code
          });
        });
      });

    this.tacheService.getTacheList()
      .subscribe((res: ListTacheResponse) => {
        res.data.map((tache) => {
          this.singleSelectOptionsTache.push({
            label: tache.denomination,
            value: tache.id,
            code: tache.code
          });
        });
      });
  }
  onSubmit(form: NgForm) {
    const finRealDate = new Date(this.dateFinReal.year, this.dateFinReal.month - 1, this.dateFinReal.day);
    this.suiviPTAServ.updateSuiviPTA(+this.singleSelectValueActivite, +this.singleSelectValueTache, form.value['toggle1'],  this.utilService.dateToString(finRealDate), form.value['commentaire'], this.id)
      .subscribe((resp) => {
        this.utilService.notifModif_OK();
        this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches/load']);
      } , (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utilService.notifModif_Error();
        this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches/edit:' + this.id ]);
      });
  }

}
