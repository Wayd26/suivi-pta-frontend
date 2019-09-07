import { Component, OnInit } from '@angular/core';
import {Programme, ProgrammeResponse} from '../../../../../models/programme.model';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ListExerciceResponse} from '../../../../../models/exercice.model';
import {NgForm} from '@angular/forms';
import {SuiviTache, SuiviTachePesponse} from '../../../../../models/suivi_tache.model';
import {SuiviTacheService} from '../../../../../shared/services/suivi-tache.service';
import {StructureService} from '../../../../../shared/services/structure.service';
import {ActiviteService} from '../../../../../shared/services/activite.service';
import {TacheService} from '../../../../../shared/services/tache.service';
import {StructureResponse} from '../../../../../models/structure.model';

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

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['value']
  };

  constructor( private utilService: UtilsService, private router: Router, private route: ActivatedRoute, private progTache: SuiviTacheService, private exerciceService: ExercieService, private utilservice: UtilsService, private structureService: StructureService, private activiteService: ActiviteService, private tacheService: TacheService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.progTache.getSuiviTache(+this.route.snapshot.params['id']).subscribe((res: SuiviTachePesponse) => {
      this.suiviTache = res.data;

      this.singleSelectValueActivite = [this.suiviTache.links[2]._activite];
      this.singleSelectValueTache = [this.suiviTache.links[0]._tache];

    });


  }
  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue);
    this.programmeService.update(form.value['libelle'], form.value['poids'], +this.singleSelectValue, this.id )
      .subscribe((resp) => {
        this.router.navigate(['/dashboard/fichier/base/programmes']);
      } , (error) => {
        console.log(error);
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/programmes/add']);
      });
  }

}
