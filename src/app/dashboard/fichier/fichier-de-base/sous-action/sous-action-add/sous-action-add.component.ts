import { Component, OnInit } from '@angular/core';
import {ResultatService} from '../../../../../shared/services/resultat.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ActionService} from '../../../../../shared/services/action.service';
import {Router} from '@angular/router';
import {ListeResultatResponse} from '../../../../../models/resultat.model';
import {NgForm} from '@angular/forms';
import {SousActionService} from '../../../../../shared/services/sous-action.service';
import {ListActionResponse} from '../../../../../models/action.model';

@Component({
  selector: 'app-sous-action-add',
  templateUrl: './sous-action-add.component.html',
  styleUrls: ['./sous-action-add.component.css']
})
export class SousActionAddComponent implements OnInit {

  singleSelectOptions: any = [];
  singleSelectOptions2: any = [];
  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string ;
  singleSelectValue2: number;

  message: string;
  constructor(private actionService: ActionService,  private utilService: UtilsService, private sousActionService: SousActionService, private router: Router) { }

  ngOnInit() {

    this.singleSelectValue2 = 0;
    this.actionService.getActionList()
      .subscribe((res: ListActionResponse) => {
        console.log(res.data);
        res.data.map((action) => {
          this.singleSelectOptions2.push({
            label: action.denomination,
            value: action.id,
            code: action.code
          });
        });
      });
    this.message = '';
  }

  onSubmit(form: NgForm) {
    this.sousActionService.createSousAction(form.value['code_sous_action'], form.value['denomination_sous_action'], form.value['poids_sous_action'], +this.singleSelectValue2)
      .subscribe((resp) => {
        //this.message = 'Succes de l\'operation';
        this.utilService.notifAjout_OK();
        this.router.navigate(['/dashboard/fichier/base/sous_action/load']);
      } , (error: ErrorResponse) => {
        console.log(error.error['error']);
        this.utilService.notifAjout_Error(error.error['error']);
        // tslint:disable-next-line:forin
        // for (const key in error.error['error']) {
        //   console.log(key);
        //   if (key !== 'error') {
        //     console.log(error.error['error'][key]);
        //     this.message = error.error['error'][key];
        //     break;
        //   }
        // }
        this.router.navigate(['/dashboard/fichier/base/sous_action/add']);
      });
  }
}
