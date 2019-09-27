import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {VilleService} from '../../../../../shared/services/ville.service';
import {ListDepartementResponse} from '../../../../../models/departement.model';
import {ListVilleResponse} from '../../../../../models/ville.model';
import {CreateStructure} from '../../../../../models/structure.model';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {StructureService} from '../../../../../shared/services/structure.service';
import {Router} from '@angular/router';
import {error} from 'util';

@Component({
  selector: 'app-structure-add',
  templateUrl: './structure-add.component.html',
  styleUrls: ['./structure-add.component.css']
})
export class StructureAddComponent implements OnInit {

  message: string;
  singleSelectOptions: any = [];
  singleSelectOptions2: any = [];
  structure: CreateStructure;


singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
};

singleSelectValue: string ;
singleSelectValue2: number;
  constructor( private villeService: VilleService, private utilService: UtilsService, private structureService: StructureService,
               private router: Router) { }

  ngOnInit() {
    this.singleSelectValue2 = 0;
    this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        console.log(res.data);
        res.data.map((ville) => {
          this.singleSelectOptions2.push({
            label: ville.denomination,
            value: ville.identifiant,
            code: ville.code
          });
        });
      });

  }

  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue2);
    this.structureService.createStructure(form.value['code'], form.value['denomination'], form.value['email'],
      form.value['telResp'], +this.singleSelectValue2, form.value['sigle'],
      form.value['cpost']).subscribe((res) => {
      this.message = 'Succes de l\'operation';
      this.router.navigate(['/dashboard/fichier/base/structures/load']);
    }, (error) => {}, () => {
      this.message = 'Operation echouée';
      this.router.navigate(['/dashboard/fichier/base/structures/add']);
    });
  }

}
