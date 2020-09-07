import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MinistereService} from '../../../../../shared/services/ministere.service';
import {ActivatedRoute, Router} from '@angular/router';
import {VilleService} from '../../../../../shared/services/ville.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ListVilleResponse} from '../../../../../models/ville.model';
import {Ministere, MinistereResponse} from '../../../../../models/ministere.model';

@Component({
  selector: 'app-ministere-edit',
  templateUrl: './ministere-edit.component.html',
  styleUrls: ['./ministere-edit.component.css']
})
export class MinistereEditComponent implements OnInit {

  singleSelectOptions: any = [];
  message: string;
  ministere: Ministere;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };
  id: number;

  singleSelectValue: string[] = [];
  constructor(private ministereService: MinistereService , private router: Router, private villeService: VilleService, private utilservice: UtilsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.ministereService.getMinistere(this.id).subscribe((res: MinistereResponse) => {
      this.ministere = res.data;
      console.log(res.data);
      this.singleSelectValue = [this.utilservice.getIdData(res.data.links, 'ville')];
    });
    this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        res.data.map((ville) => {
          this.singleSelectOptions.push({
            label: ville.denomination,
            value: ville.id.toString(),
            code: ville.code
          });
        });
      });
  }
  onSubmit(form: NgForm) {
  //   this.ministereService.update(form.value['code_ministere'], form.value['denomination_ministere'], form.value['sigle'],
  //     +this.singleSelectValue, form.value['email'], form.value['telResp'], this.id)
  //     .subscribe((resp) => {
  //       this.message = 'Succes de l\'operation';
  //       this.router.navigate(['/dashboard/fichier/base/ministere/load']);
  //     } , (error) => {
  //       console.log(error);
  //       this.message = 'Echec de l\'operation';
  //       this.router.navigate(['/dashboard/fichier/base/ministere/edit/' + this.id]);
  //     });
   }
}
