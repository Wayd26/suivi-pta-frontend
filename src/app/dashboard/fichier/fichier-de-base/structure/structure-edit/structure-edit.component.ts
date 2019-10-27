import { Component, OnInit } from '@angular/core';
import {CreateStructure, Structure, StructureResponse} from '../../../../../models/structure.model';
import {VilleService} from '../../../../../shared/services/ville.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {StructureService} from '../../../../../shared/services/structure.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ListVilleResponse} from '../../../../../models/ville.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-structure-edit',
  templateUrl: './structure-edit.component.html',
  styleUrls: ['./structure-edit.component.css']
})
export class StructureEditComponent implements OnInit {
  structure: Structure;
  singleSelectOptions: any = [];
  singleSelectOptions2: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = ['reactjs'];
  singleSelectValue2: string[];
  id: number;

  constructor( private villeService: VilleService, private utilService: UtilsService, private structureService: StructureService,
               private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'] ;
    this.structureService.getStructure(this.id).subscribe((res: StructureResponse) => {
      this.structure = res.data;
      console.log(res.data);
      this.singleSelectValue2 = [this.utilService.getIdData(res.data.links, 'ville')];

     // this.singleSelectValue = [this.utilService.getIdData(res.data.links, 'exercice')];

    });
    this.message = '';
    this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        console.log(res.data);
        res.data.map((ville) => {
          this.singleSelectOptions2.push({
            label: ville.denomination,
            value: ville.identifiant.toString(),
            code: ville.code
          });
        });
      });

  }

  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue2);
    this.structureService.update(form.value['code'], form.value['denomination'], form.value['email'],
      form.value['telResp'], +this.singleSelectValue2, form.value['sigle'],
      form.value['cpost'], this.id).subscribe((res) => {
      this.message = 'Succes de l\'operation';
      this.router.navigate(['/dashboard/fichier/base/structures/load']);
      }, (error: ErrorResponse) => {
        console.log(error.error['error']);
        // tslint:disable-next-line:forin
        for (const key in error.error['error']) {
            console.log(key);
            if (key !== 'error') {
              console.log(error.error['error'][key]);
            this.message = error.error['error'][key];
            break;
            }
        }this.router.navigate(['/dashboard/fichier/base/structures/edit/' + this.id]);
    });
  }
}
