import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Exercice, ListExerciceResponse} from '../../../../models/exercice.model';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {DataService} from '../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../constants/urlConstants';
import swal from 'sweetalert2';
import {UtilsService} from '../../../../shared/services/utils.service';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.css']
})
export class ExerciceListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  exercices: Exercice[];

  constructor(private exerciceService: ExercieService, private utilService: UtilsService, private router: Router, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '380',
      pagingType: 'full_numbers',
      columnDefs: [
        {'width': '20%', 'targets': 0},
        {'width': '20%', 'targets': 1}
      ]
    };
    this.exercices = this.dataService.getExercices();
    this.exerciceService.getExerciceList().subscribe((res: ListExerciceResponse) => {
      this.dataService.setExercices(res.data);
    }, (error) => {
      this.exercices = [];
    }, () => {
    });
  }

  onDelete(id) {

    swal({
      title: 'Attention !',
      text: 'Etes-vous sûr de vouloir effectuer cette suppression ? ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprimer !',
      cancelButtonText: 'Non, Annuler !',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        this.exerciceService.deleteExercice(id).subscribe((res) => {
          this.exercices = this.exercices.filter((action) => {
            return action.id !== id;
          });
          swal('Suppression !', 'Opération effectuée', 'success');

        }, ( error: ErrorResponse) => {
          this.utilService.notifSupprImpo();

          console.log(error.error['error']);
        });

        this.router.navigate(['/dashboard/parametres/exercice/load']);


      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal('Annulé !', '', 'warning');
      }
    });
  }

}
