import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListeSuiviTachePesponse, SuiviTache} from '../../../../models/suivi_tache.model';
import {SuiviTacheService} from '../../../../shared/services/suivi-tache.service';
import {DataService} from '../../../../shared/services/data.service';


@Component({
  selector: 'app-suivi-pta-list',
  templateUrl: './suivi-pta-list.component.html',
  styleUrls: ['./suivi-pta-list.component.css']
})
export class SuiviPtaListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  suiviTaches: SuiviTache[];

  constructor(private suiviPTAService: SuiviTacheService, private router: Router, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers',
      columnDefs: [
        {'width': '20%', 'targets': 0},
        {'width': '20%', 'targets': 1}
      ]
    };
    this.suiviTaches = this.dataService.getSuiviTaches();
    this.suiviPTAService.getSuiviTacheList().subscribe((res: ListeSuiviTachePesponse) => {
      this.dataService.setSuiviTaches(res.data);
    }, (error) => {
      this.suiviTaches = [];
        }, () => {
      });
    }
}
