import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {Indicateur, IndicateurResponse} from '../../../../models/indicateur.model';
import {IndicateurService} from '../../../../shared/services/indicateur.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-indicateurs-realises-edit',
  templateUrl: './indicateurs-realises-edit.component.html',
  styleUrls: ['./indicateurs-realises-edit.component.css']
})
export class IndicateursRealisesEditComponent implements OnInit {
  singleSelectOptionsActivite: any = [];
  singleSelectOptionsIndicateur: any = [];
  message: string;
  singleSelectValueActivite: string[] = [];
  singleSelectValueIndicateur: string[] = [];
  indicateur: Indicateur;
  id: number;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['value']
  };
  constructor(private  indicService: IndicateurService, private utilService: UtilsService, private activiteService: ActiviteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.indicService.getIndicateur(+this.route.snapshot.params['id']).subscribe((res: IndicateurResponse) => {
      this.indicateur = res.data;

      this.singleSelectValueActivite = [this.indicateur.activite_id];
      this.singleSelectValueIndicateur = [this.indicateur.libelle];
      this.singleSelectValueActivite = this.utilService.getIdData(this.indicateur, 'activite_id');
      this.singleSelectValueIndicateur = this.utilService.getIdData(this.indicateur, 'libelle');
          });
  }
  onSubmit(form: NgForm) {
    this.indicService.updateIndicateur(this.singleSelectValueIndicateur.toString(), form.value['valeur_cible'], form.value['valeur_realisee'], +this.singleSelectValueActivite, this.id)
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/fichier/traitement/indicateurs_realises/load']);
      } , (error: ErrorResponse) => {
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
       this.router.navigate(['/dashboard/fichier/traitement/indicateurs_realises/edit/' + this.id ]);
      });
  }

}
