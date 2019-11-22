import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {Indicateur, ListIndicateurResponse} from '../../../../models/indicateur.model';
import {IndicateurService} from '../../../../shared/services/indicateur.service';
import {DataService} from '../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../constants/urlConstants';
import swal from 'sweetalert2';
import {UtilsService} from '../../../../shared/services/utils.service';


@Component({
  selector: 'app-indicateurs-realises-list',
  templateUrl: './indicateurs-realises-list.component.html',
  styleUrls: ['./indicateurs-realises-list.component.css']
})
export class IndicateursRealisesListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  indicateurs: Indicateur[];


  constructor(private indicateurService: IndicateurService, private utilService: UtilsService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '380',
      pagingType: 'full_numbers',
      columnDefs: [
        { 'width': '20%', 'targets': 0 },

      ]
    };
    this.indicateurs = this.dataService.getIndicateurs();
    this.indicateurService.getIndicateurList().subscribe((res: ListIndicateurResponse) => {
      this.dataService.setIndicateurs(res.data);
    } , (error) => {
      this.indicateurs = [];
    }, () => {
    });
  }

  onDelete(id){




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

        this.indicateurService.deleteIndicateur(id).subscribe((res) => {
          this.indicateurs = this.indicateurs.filter((action) => {
            return action.id !== id;
          });
          swal('Suppression !', 'Opération effectuée', 'success');

        }, ( error: ErrorResponse) => {
          this.utilService.notifSupprImpo();

          console.log(error.error['error']);
        });

        this.router.navigate(['/dashboard/traitement/indicateurs_realises/load']);


      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal('Annulé !', '', 'warning');
      }
    });


  }
  }
