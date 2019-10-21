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
      this.singleSelectValue2 = [this.utilService.getIdData(res.data.links, 'town')];
    });
    this.message = '';
    this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        console.log(res.data);
        res.data.map((ville) => {
          this.singleSelectOptions2.push({
            label: ville.denomination,
            value: ville.id.toString(),
            code: ville.code
          });
        });
      });

  }

  onSubmit(form: NgForm) {
    console.log('le code est : ' + form.value['code']);
    console.log('la denomination est : ' + form.value['denomination']);
    console.log('la b postale est : ' + form.value['bpost']);
    console.log('les site web est : ' + form.value['website']);
    console.log('l ID de la ville : ' + this.singleSelectValue2);
    console.log('le Telephone est : ' + form.value['telResp']);
    console.log(' le mail est : ' + form.value['email']);
    console.log('le sigle est : ' + form.value['sigle']);

    this.structureService.update(form.value['code'], form.value['denomination'], form.value['bpost'] , form.value['website'],
      +this.singleSelectValue2, form.value['telResp'], form.value['email'], form.value['sigle'], this.id).subscribe((res) => {
      // this.message = 'Succes de l\'operation';
      this.utilService.notifModif_OK();
      this.router.navigate(['/dashboard/fichier/base/structures/load']);
      }, (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utilService.notifModif_Error(error.error['error']);
        // tslint:disable-next-line:forin
        // for (const key in error.error['error']) {
        //     console.log(key);
        //     if (key !== 'error') {
        //       console.log(error.error['error'][key]);
        //     this.message = error.error['error'][key];
        //     break;
        //     }
        // }
        this.router.navigate(['/dashboard/fichier/base/structures/edit/' + this.id]);
    });
  }
}
