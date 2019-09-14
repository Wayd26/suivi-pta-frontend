import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ActionService} from '../../../../../shared/services/action.service';
import {ResultatService} from '../../../../../shared/services/resultat.service';
import {ListeResultatResponse} from '../../../../../models/resultat.model';
import {UtilsService} from '../../../../../shared/services/utils.service';


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
  singleSelectValue2: number;

  message: string;
  constructor(private resultatService: ResultatService,  private utilService: UtilsService, private actionService: ActionService, private router: Router) { }

  ngOnInit() {

    this.singleSelectValue2 = 0;
    this.resultatService.getResultatList()
      .subscribe((res: ListeResultatResponse) => {
        console.log(res.data);
        res.data.map((resultat) => {
          this.singleSelectOptions2.push({
            label: resultat.libelle,
            value: resultat.identifiant,
            code: resultat.code
          });
        });
      });
    this.message = '';
  }
  onSubmit(form: NgForm) {
    this.actionService.createAction(form.value['code_action'], form.value['libelle_action'], form.value['poids_action'], +this.singleSelectValue2)
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/action/load']);
      } , (error) => {
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/action/add']);
      });
  }
}
