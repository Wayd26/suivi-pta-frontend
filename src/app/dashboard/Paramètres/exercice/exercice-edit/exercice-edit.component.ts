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
import {ProgrammeResponse} from '../../../../models/programme.model';

@Component({
  selector: 'app-exercice-edit',
  templateUrl: './exercice-edit.component.html',
  styleUrls: ['./exercice-edit.component.css']
})
export class ExerciceEditComponent implements OnInit {
    message: string;
    id: number;
    exercice: Exercice;
  date_debut;
  date_fin;
  constructor(private exerciceService: ExercieService , private router: Router, private utilservice: UtilsService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.message = '';

    this.id = +this.route.snapshot.params['id'];
    this.exerciceService.getExercice(+this.route.snapshot.params['id']).subscribe((res: ExerciceResponse) => {
      this.exercice = res.data;
      this.date_debut = this.exercice.started_on;
      this.date_fin = this.exercice.ended_on;

      console.log(res.data);

      console.log('la date de début est ' + this.exercice.started_on);

      console.log('la date de fin est ' + this.exercice.ended_on);

    });
  }

  onSubmit(form: NgForm) {
      this.exerciceService.updateExercice(form.value['annee_exercice'], form.value['denomination_exercice'], this.utilservice.changeDateFornat(this.utilservice
        .getDate(this.date_debut.year, this.date_debut.month, this.date_debut.day)),  this.utilservice.changeDateFornat(this.utilservice
        .getDate(this.date_fin.year, this.date_fin.month, this.date_fin.day)), this.id)
      .subscribe((resp) => {
        this.utilservice.notifModif_OK();
        this.router.navigate(['/dashboard/parametres/exercice/load']);
      } , (error: ErrorResponse) => {

        console.log(error);
        console.log(error.error['error']);
        this.utilservice.notifModif_Error(error.error['error']);
        // tslint:disable-next-line:forin
        // for (const key in error.error['error']) {
        //   console.log(key);
        //   if (key !== 'error') {
        //     console.log(error.error['error'][key]);
        //     this.message = error.error['error'][key];
        //     break;
        //   }
        // }
        this.router.navigate(['/dashboard/parametres/exercice/edit/' + this.id]);
      });
  }
}
