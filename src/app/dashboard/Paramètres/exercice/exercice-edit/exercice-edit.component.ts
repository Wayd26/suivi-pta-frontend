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
      this.date_fin = new Date(res.data.ended_on);
      this.date_debut = new Date(res.data.started_on);


      const datfinspli = res.data.ended_on.split('-');
      const datedebspli = res.data.started_on.split('-');
      this.date_fin = {year: +datfinspli[0], month: +datfinspli[1], day: +datfinspli[2]};
      this.date_debut = {year: +datedebspli[0], month: +datedebspli[1], day: +datedebspli[2]};
      console.log(res.data);

      console.log(this.date_fin);
      console.log(typeof (this.date_fin));
    });
  }

  onSubmit(form: NgForm) {
       const debDate = new Date(this.date_debut.year, this.date_debut.month - 1, this.date_debut.day);
       const finDate = new Date(this.date_fin.year, this.date_fin.month - 1, this.date_fin.day);
    console.log(typeof(this.utilservice.dateToString(debDate)));

      this.exerciceService.updateExercice(form.value['denomination_exercice'], form.value['annee_exercice']  , this.utilservice.dateToString(debDate),  this.utilservice.dateToString(finDate), this.id)
      .subscribe((resp) => {
        this.utilservice.notifModif_OK();
        this.router.navigate(['/dashboard/parametres/exercice/load']);
      } , (error: ErrorResponse) => {

        console.log(error);
        console.log(error.error['error']);
        this.utilservice.notifModif_Error();
        this.router.navigate(['/dashboard/parametres/exercice/edit/' + this.id]);
      });
  }
}
