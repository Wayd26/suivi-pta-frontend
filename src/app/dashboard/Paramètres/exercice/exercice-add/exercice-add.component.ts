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
    const debDate = new Date(this.started_on.year, this.started_on.month - 1, this.started_on.day);
    const finDate = new Date(this.ended_on.year, this.ended_on.month - 1, this.ended_on.day);

    this.exerciceService.createExercice(form.value['denomination_exercice'], form.value['annee_exercice'], this.utilservice.dateToString(debDate), this.utilservice.dateToString(finDate))
      .subscribe((resp) => {
        this.utilservice.notifAjout_OK();
        this.router.navigate(['/dashboard/parametres/exercice/load']);
      } , (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utilservice.notifAjout_Error();
        this.router.navigate(['/dashboard/parametres/exercice/add']);
      });
  }

}

