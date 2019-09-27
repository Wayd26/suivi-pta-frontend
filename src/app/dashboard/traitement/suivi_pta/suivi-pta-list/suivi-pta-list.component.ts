import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListeSuiviTachePesponse, SuiviTache} from '../../../../models/suivi_tache.model';
import {SuiviTacheService} from '../../../../shared/services/suivi-tache.service';
import {DataService} from '../../../../shared/services/data.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {ListActiviteResponse} from '../../../../models/activite.model';


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
        res.data.map((activite) => {
          this.singleSelectOptions.push({
            label: activite.libelle,
            value: activite.identifiant,
            code: activite.identifiant
          });
        });
      });
    this.suiviTaches = this.dataService.getSuiviTaches();
    this.suiviPTAService.getSuiviTacheList().subscribe((res: ListeSuiviTachePesponse) => {
      this.dataService.setSuiviTaches(res.data);
    }, (error) => {
      this.suiviTaches = [];
        }, () => {
      });
    }

  onSelect() {

    this.totalTEP_Real = 0 ;
    console.log(this.singleSelectValue);
    this.suiviTacheSelect = this.dataService.getSuiviTaches().filter(a => {
      return this.utilservice.getIdData(a.links, 'activite'); } );
    this.suiviTacheSelectReal = this.suiviTacheSelect.filter( c => {
      return c.est_realisee === true ;
    })

    this.suiviTacheSelectReal.map(b => {
      this.totalTEP_Real = +(this.totalTEP_Real + (+b.poids)) ;
      console.log(this.totalTEP_Real);

    });

  }
}
