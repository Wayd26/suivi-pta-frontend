import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {Indicateur, IndicateurResponse, ListIndicateurResponse} from '../../../../models/indicateur.model';
import {IndicateurService} from '../../../../shared/services/indicateur.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ListActiviteResponse} from '../../../../models/activite.model';


@Component({
  selector: 'app-indicateurs-realises-edit',
  templateUrl: './indicateurs-realises-edit.component.html',
  styleUrls: ['./indicateurs-realises-edit.component.css']
})
export class IndicateursRealisesEditComponent implements OnInit {
  singleSelectOptions: any = [];
  message: string;
  singleSelectValue: string[] = [];

  indicateur: Indicateur;
  id: number;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['value']
  };
  constructor(private  indicService: IndicateurService,
    private utilService: UtilsService, private activiteService: ActiviteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.indicService.getIndicateur(+this.route.snapshot.params['id']).subscribe((res: IndicateurResponse) => {
      this.indicateur = res.data;

      this.singleSelectValue = [this.utilService.getIdData(res.data.links, 'activity')];
      console.log('Ceci est l activite : ' + this.singleSelectValue);
          });

     this.activiteService.getActiviteList()
       .subscribe((res: ListActiviteResponse) => {
         res.data.map((acti) => {
           this.singleSelectOptions.push({
             label: acti.denomination,
             value: acti.id.toString(),
             code: acti.code
           });
         });
       });

  }
  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue);
    this.indicService.updateIndicateur(form.value['denomination'], form.value['valeur_cible'],
    +form.value['valeur_realisee'], +this.singleSelectValue, this.id)
      .subscribe((resp) => {
        this.utilService.notifModif_OK();
        this.router.navigate(['/dashboard/fichier/traitement/indicateurs_realises/load']);
      } , (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utilService.notifModif_Error();
       this.router.navigate(['/dashboard/fichier/traitement/indicateurs_realises/edit/' + this.id ]);
      });
  }

}
