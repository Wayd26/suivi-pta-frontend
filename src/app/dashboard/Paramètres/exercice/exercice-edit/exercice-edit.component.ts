import { Component, OnInit } from '@angular/core';
import {Ministere, MinistereResponse} from '../../../../models/ministere.model';
import {MinistereService} from '../../../../shared/services/ministere.service';
import {ActivatedRoute, Router} from '@angular/router';
import {VilleService} from '../../../../shared/services/ville.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ListVilleResponse} from '../../../../models/ville.model';
import {NgForm} from '@angular/forms';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {Exercice, ExerciceResponse} from '../../../../models/exercice.model';

@Component({
  selector: 'app-exercice-edit',
  templateUrl: './exercice-edit.component.html',
  styleUrls: ['./exercice-edit.component.css']
})
export class ExerciceEditComponent implements OnInit {
    id: number;
    exercice: Exercice;

    constructor(private exerciceService: ExercieService , private router: Router, private utilservice: UtilsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.exerciceService.getExercice(this.id).subscribe((res: ExerciceResponse) => {
      this.exercice = res.data;
    });
  }
  onSubmit(form: NgForm) {
    this.exerciceService.updateExercice(form.value['numero_exercice'], form.value['denomination_exercice'], form.value['date_debut_exercice'], form.value['date_fin_exercice'])
      .subscribe((resp) => {
        this.router.navigate(['/dashboard/parametres/exercices']);
      } , (error) => {
        console.log(error);
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/parametres/exercices/edit/' + this.id]);
      });
  }
}
