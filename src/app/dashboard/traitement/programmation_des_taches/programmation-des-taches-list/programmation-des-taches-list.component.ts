import { Component, OnInit } from '@angular/core';
import {ListeSuiviTachePesponse, SuiviTache} from '../../../../models/suivi_tache.model';
import {SuiviTacheService} from '../../../../shared/services/suivi-tache.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../shared/services/data.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {ListActiviteResponse} from '../../../../models/activite.model';
import {DELETE_CONFIRMATION} from '../../../../constants/urlConstants';
import swal from 'sweetalert2';


@Component({
  selector: 'app-programmation-des-taches-list',
  templateUrl: './programmation-des-taches-list.component.html',
  styleUrls: ['./programmation-des-taches-list.component.css']
})
export class ProgrammationDesTachesListComponent implements OnInit {


  totalTEP = 0 ;

  singleSelectOptions: any = [];
  dtOptions: DataTables.Settings = {};
  suiviTaches: SuiviTache[];

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };
  suiviTacheSelect: SuiviTache[];
  singleSelectValue: string[] = [];

  constructor(private suiviTacheService: SuiviTacheService, private router: Router, private dataService: DataService, private utilservice: UtilsService, private activiteService: ActiviteService) {
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
            value: activite.id,
            code: activite.code
          });
        });
      });


    this.suiviTaches = this.dataService.getSuiviTaches();
    this.suiviTacheSelect = this.suiviTaches;
    this.suiviTacheService.getSuiviTacheList().subscribe((res: ListeSuiviTachePesponse) => {
      this.dataService.setSuiviTaches(res.data);
    }, (error) => {
      this.suiviTaches = [];
    }, () => {
    });
  }
  onSelect() {
    if (+this.singleSelectValue === 0) {
      this.suiviTaches = this.dataService.getSuiviTaches();
      this.suiviTacheSelect = this.suiviTaches;
      this.totalTEP = 0 ;
    } else {
      this.totalTEP = 0 ;
      // console.log('singleSelectValue returning = ' + this.singleSelectValue);
      this.suiviTacheSelect = this.suiviTaches.filter(a => {
        // console.log('GetIdData returning = ' + this.utilservice.getIdData(a.links, 'activity'));
        // tslint:disable-next-line:max-line-length
        // console.log('In onSelect Function returning = ' + (+(this.utilservice.getIdData(a.links, 'activity') === +this.singleSelectValue)));
        return +(this.utilservice.getIdData(a.links, 'activity')) === +this.singleSelectValue; } );

      // console.log(this.suiviTacheSelect);
      // a._activity === this.singleSelectValue[0]; } );
      this.suiviTacheSelect.map(b => {
        this.totalTEP = this.totalTEP + (+b.weight_in_activity);
        this.totalTEP.toFixed(2);
        // console.log(this.totalTEP);
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

        this.suiviTacheService.deleteSuiviTache(id).subscribe((res) => {
          this.suiviTacheSelect = this.suiviTacheSelect.filter((action) => {
            return action.id !== id;
          });
          swal('Suppression !', 'Opération effectuée', 'success');

        }, ( error: ErrorResponse) => {
          this.utilservice.notifSupprImpo();

          console.log(error.error['error']);
        });

        this.router.navigate(['/dashboard/traitement/programmation_des_taches/load']);


      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal('Annulé !', '', 'warning');
      }
    });

  }


}
