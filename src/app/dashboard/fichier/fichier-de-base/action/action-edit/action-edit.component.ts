import { Component, OnInit } from '@angular/core';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ListExerciceResponse} from '../../../../../models/exercice.model';
import {NgForm} from '@angular/forms';
import {ActionService} from '../../../../../shared/services/action.service';
import {Action, ActionResponse} from '../../../../../models/action.model';
import {ResultatService} from '../../../../../shared/services/resultat.service';

@Component({
  selector: 'app-action-edit',
  templateUrl: './action-edit.component.html',
  styleUrls: ['./action-edit.component.css']
})
export class ActionEditComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  // singleSelectOptions: any = [];
  // message: string;
  // singleSelectValue: string[] = [];
  // action: Action;
  // id: number;
  //
  // singleSelectConfig: any = {
  //   labelField: 'label',
  //   valueField: 'value',
  //   searchField: ['value']
  // };
  // constructor(private  actionService: ActionService, private utilService: UtilsService, private resultatService: ResultatService, private router: Router, private route: ActivatedRoute) { }
  //
  // ngOnInit() {
  //   this.message = '';
  //   this.id = +this.route.snapshot.params['id'];
  //   this.actionService.getAction(+this.route.snapshot.params['id']).subscribe((res: ActionResponse) => {
  //     this.action = res.data;
  //
  //     this.singleSelectValue = [this.action._resultat];
  //     console.log(this.utilService.getIdData(res.data.links, 'resultat'));
  //   });
  //
  //   this.resultatService.getResultatList()
  //     .subscribe((res: Lis))
  //
  //   this.exerciceService.getExerciceList()
  //     .subscribe((res: ListExerciceResponse) => {
  //       res.data.map((exo) => {
  //         this.singleSelectOptions.push({
  //           label: exo.denomination,
  //           value: exo.identifiant,
  //           code: exo.identifiant
  //         });
  //       });
  //     });
  // }
  // onSubmit(form: NgForm) {
  //   console.log(this.singleSelectValue);
  //   this.programmeService.update(form.value['libelle'], form.value['poids'], +this.singleSelectValue, this.id )
  //     .subscribe((resp) => {
  //       this.router.navigate(['/dashboard/fichier/base/programmes']);
  //     } , (error) => {
  //       console.log(error);
  //       this.message = 'Echec de l\'operation';
  //       this.router.navigate(['/dashboard/fichier/base/programmes/add']);
  //     });
  // }

}
