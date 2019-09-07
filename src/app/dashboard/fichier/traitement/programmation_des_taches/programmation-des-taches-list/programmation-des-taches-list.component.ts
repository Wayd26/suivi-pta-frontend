import { Component, OnInit } from '@angular/core';
import {ListProgrammeResponse, Programme} from '../../../../../models/programme.model';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ListeSuiviTachePesponse, SuiviTache} from '../../../../../models/suivi_tache.model';
import {SuiviTacheService} from '../../../../../shared/services/suivi-tache.service';
import {ListVilleResponse, Ville} from '../../../../../models/ville.model';
import {VilleService} from '../../../../../shared/services/ville.service';

@Component({
  selector: 'app-programmation-des-taches-list',
  templateUrl: './programmation-des-taches-list.component.html',
  styleUrls: ['./programmation-des-taches-list.component.css']
})
export class ProgrammationDesTachesListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  suiviTaches: SuiviTache[];

  constructor(private suiviTacheService: SuiviTacheService, private router: Router, private dataService: DataService) {
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
    this.suiviTacheService.getSuiviTacheList().subscribe((res: ListeSuiviTachePesponse) => {
      this.dataService.setSuiviTaches(res.data);
    }, (error) => {
      this.suiviTaches = [];
    }, () => {
    });
  }
}
