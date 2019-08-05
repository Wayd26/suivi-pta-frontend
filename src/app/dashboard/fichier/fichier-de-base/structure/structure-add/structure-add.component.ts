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

@Component({
  selector: 'app-structure-add',
  templateUrl: './structure-add.component.html',
  styleUrls: ['./structure-add.component.css']
})
export class StructureAddComponent implements OnInit {
  singleSelectOptions: any = [];
  singleSelectOptions2: any = [];
  structure: CreateStructure;


singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
};

singleSelectValue: string ;
singleSelectValue2: string;
  constructor( private villeService: VilleService, private utilService: UtilsService, private structureService: StructureService,
               private router: Router) { }

  ngOnInit() {

    this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        res.data.map((ville) => {
          this.singleSelectOptions2.push({
            label: ville.denomination,
            value: ville.code,
            code: ville.code
          });
        });
      });

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.structureService.createStructure(form.value['denomination'], form.value['email'],
      form.value['telResp'],+this.utilService.getElementId(this.singleSelectOptions2, this.singleSelectValue2)  ).subscribe((res) => {
      this.router.navigate(['/dashboard/fichier/base/structures']);
    });
  }

}
