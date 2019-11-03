import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {VilleService} from '../../../../../shared/services/ville.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {ListVilleResponse} from '../../../../../models/ville.model';
import {ListDepartementResponse} from '../../../../../models/departement.model';

@Component({
  selector: 'app-ville-add',
  templateUrl: './ville-add.component.html',
  styleUrls: ['./ville-add.component.css']
})
export class VilleAddComponent implements OnInit {
  singleSelectOptions: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = [];
  constructor(private router: Router, private villeService: VilleService, private utilservice: UtilsService, private departementService: DepartementService) { }

  ngOnInit() {
    this.message = '';
    this.departementService.getDepartementList()
      .subscribe((res: ListDepartementResponse) => {
        res.data.map((departement) => {
          this.singleSelectOptions.push({
            label: departement.denomination,
            value: departement.id.toString(),
            code: departement.code
          });
        });
      });
  }
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value['code_ville']);
    console.log(form.value['nom_ville']);
    console.log(+this.singleSelectValue);
      this.villeService.createVille(form.value['code_ville'], form.value['nom_ville'], +this.singleSelectValue)
        .subscribe((resp) => {
          // this.message = 'Succes de l\'operation';
          this.utilservice.notifAjout_OK();
          this.router.navigate(['/dashboard/fichier/localisation/ville/load']);
        } , (error: ErrorResponse) => {
          console.log(error);
        console.log(error.error['error']);
        this.utilservice.notifAjout_Error(error.error['error']);
        // tslint:disable-next-line:forin
        // for (const key in error.error['error']) {
        //     console.log(key);
        //     if (key !== 'error') {
        //       console.log(error.error['error'][key]);
        //     this.message = error.error['error'][key];
        //     break;
        //     }
        // }
          this.router.navigate(['/dashboard/fichier/localisation/ville/add']);
        });
  }

}

