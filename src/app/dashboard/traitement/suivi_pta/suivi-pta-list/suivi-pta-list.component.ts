import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListeSuiviTachePesponse, SuiviTache} from '../../../../models/suivi_tache.model';
import {SuiviTacheService} from '../../../../shared/services/suivi-tache.service';
import {DataService} from '../../../../shared/services/data.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {ListActiviteResponse} from '../../../../models/activite.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-suivi-pta-list',
  templateUrl: './suivi-pta-list.component.html',
  styleUrls: ['./suivi-pta-list.component.css']
})
export class SuiviPtaListComponent implements OnInit {


  suiviTacheSelect: SuiviTache[];
  suiviTacheSelectReal: SuiviTache[];
  totalTEP_Real: number = 0 ;
  singleSelectOptions: any = [];
  dtOptions: DataTables.Settings = {};
  suiviTaches: SuiviTache[];

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };
  singleSelectValue: string[] = [];

  constructor(private suiviPTAService: SuiviTacheService, private router: Router, private dataService: DataService,  private utilservice: UtilsService, private activiteService: ActiviteService) {
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

    this.activiteService.getActiviteList()
      .subscribe((res: ListActiviteResponse) => {

        this.singleSelectOptions.push({
          label: 'Toutes les actvités',
          value: 0,
          code: 0
        });
        res.data.map((activite) => {
          this.singleSelectOptions.push({
            label: activite.denomination,
            value: activite.id.toString(),
            code: activite.code
          });
        });
      });
    this.suiviTaches = this.dataService.getSuiviTaches();
    this.suiviTacheSelectReal = this.suiviTaches;
    this.suiviPTAService.getSuiviTacheList().subscribe((res: ListeSuiviTachePesponse) => {
      this.dataService.setSuiviTaches(res.data);
    }, (error) => {
      this.suiviTaches = [];
        }, () => {
      });
    }

  onSelect() {

    if (+this.singleSelectValue === 0) {
      this.suiviTaches = this.dataService.getSuiviTaches();
      this.suiviTacheSelectReal = this.suiviTaches;
      this.totalTEP_Real = 0 ;
    } else {


      this.totalTEP_Real = 0;
      console.log(this.singleSelectValue);
      this.suiviTacheSelect = this.suiviTaches.filter(a => {
        return +(this.utilservice.getIdData(a.links, 'activity')) === +this.singleSelectValue; } );

      this.suiviTacheSelectReal = this.suiviTacheSelect.filter(c => {
        return c.is_realized === true;
      });

      this.suiviTacheSelectReal.map(b => {
        this.totalTEP_Real = +(this.totalTEP_Real + (+b.weight_in_activity));
        console.log(this.totalTEP_Real);

      });


      }

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



          this.suiviPTAService.deleteSuiviTache(id).subscribe((res) => {
            this.suiviTacheSelectReal = this.suiviTacheSelectReal.filter((action) => {
              return action.id !== id;
            });
            swal('Suppression !', 'Opération effectuée', 'success');

          }, ( error: ErrorResponse) => {
            this.utilservice.notifSupprImpo();

            console.log(error.error['error']);
          });

          this.router.navigate(['/dashboard/traitement/suivi_pta/load']);


        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal('Annulé !', '', 'warning');
        }
      });


    }
}
