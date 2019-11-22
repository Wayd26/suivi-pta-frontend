import { Component, OnInit } from '@angular/core';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {Exercice, ListExerciceResponse} from '../../../../../models/exercice.model';
import {ListSousActionResponse, SousAction, SousActionExport} from '../../../../../models/sous_action.model';
import {SousActionService} from '../../../../../shared/services/sous-action.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import swal from 'sweetalert2';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';

@Component({
  selector: 'app-sous-action-list',
  templateUrl: './sous-action-list.component.html',
  styleUrls: ['./sous-action-list.component.css']
})
export class SousActionListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  sousActions: SousAction[] = [];
  sousActionsExport: SousActionExport[] = [];


  constructor(public sousActionService: SousActionService, private router: Router,
              private dataService: DataService, private utilService: UtilsService, private exportService: ExportAsExelService) {
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

    this.sousActions.map((a) => {
      this.sousActionsExport.push({
        id: a.id,
        code: a.code,
        denomination: a.denomination,
        weight_in_action: a.weight_in_action,
        _action: a._action
      });
    });

  }

  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.sousActionsExport)), 'Sous_Action');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.sousActionsExport)), 'Sous_Action');

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
                  this.sousActionService.deleteSousAction(id).subscribe((res) => {
                    this.sousActions = this.sousActions.filter((action) => {
                      return action.id !== id;
            });
            swal('Suppression !', 'Opération effectuée', 'success');

          }, ( error: ErrorResponse) => {
            this.utilService.notifSupprImpo();

            console.log(error.error['error']);
          });

          this.router.navigate(['/dashboard/fichier/base/sous_action/load']);


        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal('Annulé !', '', 'warning');
        }
      });

  }

}
