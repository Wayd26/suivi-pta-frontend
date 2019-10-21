import { Component, OnInit } from '@angular/core';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {Exercice, ListExerciceResponse} from '../../../../../models/exercice.model';
import {ListSousActionResponse, SousAction} from '../../../../../models/sous_action.model';
import {SousActionService} from '../../../../../shared/services/sous-action.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import swal from 'sweetalert2';
import {UtilsService} from '../../../../../shared/services/utils.service';

@Component({
  selector: 'app-sous-action-list',
  templateUrl: './sous-action-list.component.html',
  styleUrls: ['./sous-action-list.component.css']
})
export class SousActionListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  sousActions: SousAction[];


  constructor(public sousActionService: SousActionService, private router: Router, private dataService: DataService, private utilService: UtilsService) {
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
    this.sousActions = this.dataService.getSousActions();
    this.sousActionService.getSousActionList().subscribe((res: ListSousActionResponse) => {
      this.dataService.setSousActions(res.data);

    }, (error) => {
      this.sousActions = [];
    }, () => {
    });
  }
  onDelete(id) {

    const self = this;

    swal({
      title: 'Attention !',
      text: 'Etes-vous sûr de vouloir effectuer cette suppression ? ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      confirmButtonText: 'Oui, Supprimer !',
      cancelButtonText: 'Non, Annuler !',
    }).then(function() {

      self.sousActionService.deleteSousAction(id).subscribe((res) => {
        self.sousActions = self.sousActions.filter((action) => {return action.id !== id;});
        swal('Deleted!', 'Your file has been deleted.', 'success');
        self.router.navigate(['/dashboard/fichier/base/sous_action/load']);
      },(error: ErrorResponse) => {
        self.utilService.notifAjout_Error(error.error['error']);
        self.router.navigate(['/dashboard/fichier/base/sous_action/load']);
        console.log(error.error['error']);
      });
    });

  }
}
