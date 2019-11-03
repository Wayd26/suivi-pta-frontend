import { Component, OnInit } from '@angular/core';
import {ListObjectifResponse, ObjectifModel, ObjectifResponse} from '../../../../../models/objectif.model';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {NgForm} from '@angular/forms';
import {Resultat,  ResultatResponse} from '../../../../../models/resultat.model';
import {ResultatService} from '../../../../../shared/services/resultat.service';

@Component({
  selector: 'app-resultat-edit',
  templateUrl: './resultat-edit.component.html',
  styleUrls: ['./resultat-edit.component.css']
})
export class ResultatEditComponent implements OnInit {

  singleSelectOptions: any = [];
  message: string;
  resultat: Resultat;
  id: number;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = [];
  constructor(private resultatService: ResultatService, private router: Router, private utils: UtilsService, private odjService: ObjectifService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.resultatService.getResultat(+this.route.snapshot.params['id']).subscribe((res: ResultatResponse) => {
      this.resultat = res.data;
      console.log(this.resultat);

      this.singleSelectValue = [this.utils.getIdData(res.data.links, 'objective')];
      console.log(this.utils.getIdData(res.data.links, 'objective'));
    });

    this.odjService.getObjectifList()
      .subscribe((res: ListObjectifResponse) => {
        res.data.map((objectif) => {
          this.singleSelectOptions.push({
            label: objectif.denomination,
            value: objectif.id.toString(),
            code: objectif.code
          });
        });
      });
  }

  onSubmit(form: NgForm) {
    console.log('form val code_resultat = ' + form.value['code_resultat']);
    console.log('form val libelle_resultat = ' + form.value['libelle_resultat']);
    console.log('single selector = ' + this.singleSelectValue.toString());
    this.resultatService.updateResultat(form.value['code_resultat'], form.value['libelle_resultat'], +this.singleSelectValue, this.id )
      .subscribe((resp) => {
        //this.message = 'Succes de l\'operation';
        this.utils.notifModif_OK();
        this.router.navigate(['/dashboard/fichier/base/resultat/load']);
      } , (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utils.notifModif_Error(error.error['error']);
        // tslint:disable-next-line:forin
        // for (const key in error.error['error']) {
        //     console.log(key);
        //     if (key !== 'error') {
        //       console.log(error.error['error'][key]);
        //     this.message = error.error['error'][key];
        //     break;
        //     }
        // }
        this.router.navigate(['/dashboard/fichier/base/resultat/edit/' + this.id ]);
      });
  }


}
