import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Programme, ProgrammeResponse} from '../../../../../models/programme.model';
import {ListExerciceResponse} from '../../../../../models/exercice.model';
import {NgForm} from '@angular/forms';
import {Tache, TacheResponse} from '../../../../../models/tache.model';
import {TacheService} from '../../../../../shared/services/tache.service';
import {ListeResultatResponse} from '../../../../../models/resultat.model';

@Component({
  selector: 'app-taches-edit',
  templateUrl: './taches-edit.component.html',
  styleUrls: ['./taches-edit.component.css']
})
export class TachesEditComponent implements OnInit {
  tache: Tache;
  id: number;
  message: string;
  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };
  singleSelectOptions: any = [];
  singleSelectValue: string[] = [];


  constructor(private  tacheService: TacheService, private utilService: UtilsService, private exerciceService: ExercieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.tacheService.getTache(+this.route.snapshot.params['id']).subscribe((res: TacheResponse) => {
      console.log(res.data);
      this.tache = res.data;

    });
    this.exerciceService.getExerciceList()
      .subscribe((res: ListExerciceResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptions.push({
            label: exo.denomination,
            value: exo.identifiant.toString(),
            code: exo.identifiant
          });
        });
      });

  }
  onSubmit(form: NgForm) {
    this.tacheService.update(form.value['code_tache'], form.value['libelle_tache'], this.id)
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/taches/load']);
      } , (error) => {
        console.log(error);
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/taches/edit/' + this.id ]);
      });
  }

}
