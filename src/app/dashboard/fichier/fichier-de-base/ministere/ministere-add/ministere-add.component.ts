import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MinistereService} from '../../../../../shared/services/ministere.service';
import {Router} from '@angular/router';
import {VilleService} from '../../../../../shared/services/ville.service';
import {ListVilleResponse} from '../../../../../models/ville.model';
import {UtilsService} from '../../../../../shared/services/utils.service';

@Component({
  selector: 'app-ministere-add',
  templateUrl: './ministere-add.component.html',
  styleUrls: ['./ministere-add.component.css']
})
export class MinistereAddComponent implements OnInit {

  singleSelectOptions: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = ['reactjs'];
  constructor(private ministereService: MinistereService , private router: Router, private villeService: VilleService, private utilservice: UtilsService) { }

  ngOnInit() {
    this.message = '';
    this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        res.data.map((ville) => {
          this.singleSelectOptions.push({
            label: ville.denomination,
            value: ville.identifiant,
            code: ville.identifiant
          });
        });
      });
  }
  onSubmit(form: NgForm) {
      this.ministereService.createMinistere(form.value['denomination_ministere'], form.value['sigle'],
        +this.singleSelectValue, form.value['email'], form.value['telResp'])
        .subscribe((resp) => {
          this.router.navigate(['/dashboard/fichier/base/ministere']);
        } , (error) => {
          console.log(error);
          this.message = 'Echec de l\'operation';
          this.router.navigate(['/dashboard/fichier/base/ministere/add']);
        });
  }
}
