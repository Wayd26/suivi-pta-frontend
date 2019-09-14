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
  constructor(private router: Router, private exerciceService: ExercieService, private utilservice: UtilsService) { }

  ngOnInit() {
    this.message = '';
  }
  onSubmit(form: NgForm) {
    this.exerciceService.createExercice(form.value['numero_exercice'], form.value['denomination_exercice'], form.value['date_debut_exercice'], form.value['date_fin_exercice'])
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/parametres/exercices/load']);
      } , (error) => {
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/parametres/exercices/add']);
      });
  }

}

