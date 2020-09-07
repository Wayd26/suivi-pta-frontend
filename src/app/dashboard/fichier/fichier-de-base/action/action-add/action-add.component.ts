import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ActionService} from '../../../../../shared/services/action.service';
import {ResultatService} from '../../../../../shared/services/resultat.service';
import {ListeResultatResponse} from '../../../../../models/resultat.model';
import {UtilsService} from '../../../../../shared/services/utils.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-action-add',
  templateUrl: './action-add.component.html',
  styleUrls: ['./action-add.component.css']
})
export class ActionAddComponent implements OnInit {

  singleSelectOptions: any = [];
  singleSelectOptions2: any = [];
  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string ;
  singleSelectValue2: string[] = ['reactjs'];

  message: string;
  constructor(private resultatService: ResultatService,  private utilService: UtilsService, private actionService: ActionService, private router: Router) { }

  ngOnInit() {
    this.resultatService.getResultatList()
      .subscribe((res: ListeResultatResponse) => {
        console.log(res.data);
        res.data.map((action) => {
          this.singleSelectOptions2.push({
            label: action.denomination,
            value: action.id.toString(),
            code: action.code
          });
        });
      });
    this.message = '';
  }
  onSubmit(form: NgForm) {
    this.actionService.createAction(form.value['code_action'], form.value['libelle_action'],
     form.value['poids_action'], +this.singleSelectValue2)
      .subscribe((resp) => {
        this.utilService.notifAjout_OK();
        this.router.navigate(['/dashboard/fichier/base/action/load']);
      } , (error: ErrorResponse) => {
        this.utilService.notifAjout_Error();
        console.log(error.error['error']);
        this.router.navigate(['/dashboard/fichier/base/action/add']);
      });
  }
}
