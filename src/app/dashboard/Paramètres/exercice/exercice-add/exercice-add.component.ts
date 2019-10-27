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
  dateDebut;
  dateFin;

  constructor(private router: Router, private exerciceService: ExercieService, private utilservice: UtilsService) { }

  ngOnInit() {
    this.message = '';
  }
  onSubmit(form: NgForm) {
    this.exerciceService.createExercice(form.value['annee_exercice'], form.value['denomination_exercice'], this.utilservice.changeDateFornat(this.utilservice
      .getDate(this.dateDebut.year, this.dateDebut.month, this.dateDebut.day)),  this.utilservice.changeDateFornat(this.utilservice
      .getDate(this.dateFin.year, this.dateFin.month, this.dateFin.day)))
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/parametres/exercice/load']);
      } , (error: ErrorResponse) => {
        console.log(error.error['error']);
        // tslint:disable-next-line:forin
        for (const key in error.error['error']) {
          console.log(key);
          if (key !== 'error') {
            console.log(error.error['error'][key]);
            this.message = error.error['error'][key];
            break;
          }
        }
        this.router.navigate(['/dashboard/parametres/exercice/add']);
      });
  }

}

