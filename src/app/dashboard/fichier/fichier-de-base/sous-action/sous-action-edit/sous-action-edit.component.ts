import { Component, OnInit } from '@angular/core';
import {Action, ActionResponse, ListActionResponse} from '../../../../../models/action.model';
import {ActionService} from '../../../../../shared/services/action.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ResultatService} from '../../../../../shared/services/resultat.service';
import {ListeResultatResponse} from '../../../../../models/resultat.model';
import {NgForm} from '@angular/forms';
import {SousActionService} from '../../../../../shared/services/sous-action.service';
import {SousAction, SousActionResponse} from '../../../../../models/sous_action.model';

@Component({
  selector: 'app-sous-action-edit',
  templateUrl: './sous-action-edit.component.html',
  styleUrls: ['./sous-action-edit.component.css']
})
export class SousActionEditComponent implements OnInit {

  message: string;
  singleSelectOptions: any = [];
  sousAction: SousAction;
  id: number;

  singleSelectValue: string[] = [];
  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  constructor(private sousActionService: SousActionService, private router: Router, private utils: UtilsService,
              private actionService: ActionService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.sousActionService.getSousAction(+this.route.snapshot.params['id']).subscribe((res: SousActionResponse) => {
      this.sousAction = res.data;

      // this.singleSelectValue = [this.utilService.getIdData(res.data.links, 'exercice')];
      this.singleSelectValue = [this.utils.getIdData(res.data.links, 'action')];

      console.log(this.utils.getIdData(res.data.links, 'action'));
    });
    this.actionService.getActionList()
      .subscribe((res: ListActionResponse) => {
        res.data.map((action) => {
          this.singleSelectOptions.push({
            label: action.denomination,
            value: action.id.toString(),
            code: action.code
          });
        });
      });
  }

  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue);
    this.sousActionService.updateSousAction(form.value['code_sous_action'],
      form.value['denomination_sous_action'], form.value['poids_sous_action'], +this.singleSelectValue, this.id)
      .subscribe((resp) => {
        this.utils.notifModif_OK();
        this.router.navigate(['/dashboard/fichier/base/sous_action/load']);
      }, (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utils.notifModif_Error();
        this.router.navigate(['/dashboard/fichier/base/sous_action/edit/' + this.id ]);
      });
  }
}
