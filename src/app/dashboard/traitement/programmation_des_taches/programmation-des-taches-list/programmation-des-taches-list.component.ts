import { Component, OnInit } from '@angular/core';
import {ListeSuiviTachePesponse, SuiviTache} from '../../../../models/suivi_tache.model';
import {SuiviTacheService} from '../../../../shared/services/suivi-tache.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../shared/services/data.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {ListActiviteResponse} from '../../../../models/activite.model';
import {DELETE_CONFIRMATION} from '../../../../constants/urlConstants';


@Component({
  selector: 'app-programmation-des-taches-list',
  templateUrl: './programmation-des-taches-list.component.html',
  styleUrls: ['./programmation-des-taches-list.component.css']
})
export class ProgrammationDesTachesListComponent implements OnInit {


  totalTEP: number = 0 ;

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
        res.data.map((activite) => {
          this.singleSelectOptions.push({
            label: activite.denomination,
            value: activite.id,
            code: activite.code
          });
        });
      });




    this.suiviTaches = this.dataService.getSuiviTaches();
    this.suiviTacheService.getSuiviTacheList().subscribe((res: ListeSuiviTachePesponse) => {
      this.dataService.setSuiviTaches(res.data);
    }, (error) => {
      this.suiviTaches = [];
    }, () => {
    });
  }
  onSelect() {
    this.totalTEP = 0 ;
    console.log(this.singleSelectValue);
    this.suiviTacheSelect = this.dataService.getSuiviTaches().filter(a => {
      return this.utilservice.getIdData(a.links, 'activite'); } );
     this.dataService.getSuiviTaches().map(b => {
      this.totalTEP = this.totalTEP + (+b.weight_in_activity) ;
      this.totalTEP.toFixed(2);
      console.log(this.totalTEP);
    });

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.suiviTacheService.deleteSuiviTache(id).subscribe((res) => {
          this.suiviTaches = this.suiviTaches.filter((action) => {
            return action.id !== id;
          });
          this.router.navigate(['/dashboard/traitement/programmation_des_taches/load']);
        }
      );
    }
  }


}
