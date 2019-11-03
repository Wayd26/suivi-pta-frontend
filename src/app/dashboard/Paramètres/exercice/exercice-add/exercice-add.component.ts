import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UtilsService} from '../../../../shared/services/utils.service';
import {NgForm} from '@angular/forms';
import {ExercieService} from '../../../../shared/services/exercie.service';

@Component({
  selector: 'app-exercice-add',
  templateUrl: './exercice-add.component.html',
  styleUrls: ['./exercice-add.component.css']
})
export class ExerciceAddComponent implements OnInit {

  message: string;
  started_on;
  ended_on;

  constructor(private router: Router, private exerciceService: ExercieService, private utilservice: UtilsService) { }

  ngOnInit() {
    this.message = '';
  }
  onSubmit(form: NgForm) {
     console.log('year is : ' + form.value['annee_exercice']);
    console.log('denomination is :' + form.value['denomination_exercice']);
    console.log('start_at ' + this.utilservice.changeDateFornat(this.utilservice
      .getDate(this.started_on.year, this.started_on.month, this.started_on.day)));

    this.exerciceService.createExercice(form.value['denomination_exercice'], form.value['annee_exercice'], this.utilservice.changeDateFornat(this.utilservice
      .getDate(this.started_on.year, this.started_on.month, this.started_on.day)),  this.utilservice.changeDateFornat(this.utilservice
      .getDate(this.ended_on.year, this.ended_on.month, this.ended_on.day)))
      .subscribe((resp) => {
        // this.message = 'Succes de l\'operation';
        this.utilservice.notifAjout_OK();
        this.router.navigate(['/dashboard/parametres/exercice/load']);
      } , (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utilservice.notifAjout_Error(error.error['error']);
        // tslint:disable-next-line:forin
        // for (const key in error.error['error']) {
        //   console.log(key);
        //   if (key !== 'error') {
        //     console.log(error.error['error'][key]);
        //     this.message = error.error['error'][key];
        //     break;
        //   }
        // }
        this.router.navigate(['/dashboard/parametres/exercice/add']);
      });
  }

}

