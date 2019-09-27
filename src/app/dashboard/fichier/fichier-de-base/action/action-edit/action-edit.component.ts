import { Component, OnInit } from '@angular/core';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ListExerciceResponse} from '../../../../../models/exercice.model';
import {NgForm} from '@angular/forms';
import {ActionService} from '../../../../../shared/services/action.service';
import {Action, ActionResponse} from '../../../../../models/action.model';
import {ResultatService} from '../../../../../shared/services/resultat.service';
import {ListeResultatResponse} from '../../../../../models/resultat.model';

@Component({
  selector: 'app-action-edit',
  templateUrl: './action-edit.component.html',
  styleUrls: ['./action-edit.component.css']
})
export class ActionEditComponent implements OnInit {
  message: string;
  singleSelectOptions: any = [];
  action: Action;
  id: number;

  singleSelectValue: string[] = [];
  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  constructor(private actionService: ActionService, private router: Router, private utils: UtilsService,
     private resultatService: ResultatService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.message = '';
      this.id = +this.route.snapshot.params['id'];
      this.actionService.getAction(+this.route.snapshot.params['id']).subscribe((res: ActionResponse) => {
        this.action = res.data;
      this.singleSelectValue = [this.utils.getIdData(res.data._resultat, 'resultat')];
      console.log(this.utils.getIdData(res.data.links, 'resultat'));
    });
    this.resultatService.getResultatList()
      .subscribe((res: ListeResultatResponse) => {
        res.data.map((resultat) => {
          this.singleSelectOptions.push({
            label: resultat.libelle,
            value: resultat.identifiant.toString(),
            code: resultat.code
          });
        });
      });
  }

  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue);
    this.actionService.updateAction(form.value['code_action'],
    form.value['libelle_action'], form.value['poids_action'], +this.singleSelectValue, this.id)
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/action']);
      }, (error: ErrorResponse) => {
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
        this.router.navigate(['/dashboard/fichier/base/action/edit/' + this.id ]);
      });
  }


}
