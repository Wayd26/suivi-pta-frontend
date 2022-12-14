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

  telephone;
  email;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = ['reactjs'];
  constructor(private ministereService: MinistereService , private router: Router,
    private villeService: VilleService, private utilservice: UtilsService) { }

  ngOnInit() {
    this.message = '';
    this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        res.data.map((ville) => {
          this.singleSelectOptions.push({
            label: ville.denomination,
            value: ville.id,
            code: ville.code
          });
        });
      });
  }
  onSubmit(form: NgForm) {
  //       console.log('email  est le suivant :' + this.email);
  //       this.ministereService.createMinistere(form.value['code_ministere'], form.value['denomination_ministere'], this.email , form.value['sigle']
  //       , this.telephone , +this.singleSelectValue, )
  //       .subscribe((resp) => {
  //         this.message = 'Succes de l\'operation';
  //         this.router.navigate(['/dashboard/fichier/base/ministere/load']);
  //       } , (error: ErrorResponse) => {
  //       console.log(error.error['error']);
  //       // tslint:disable-next-line:forin
  //       for (const key in error.error['error']) {
  //           console.log(key);
  //           if (key !== 'error') {
  //             console.log(error.error['error'][key]);
  //           this.message = error.error['error'][key];
  //           break;
  //           }
  //       }
  //         this.router.navigate(['/dashboard/fichier/base/ministere/add']);
  //       });
   }
}
