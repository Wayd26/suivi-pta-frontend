import { Component, OnInit } from '@angular/core';
import {SuiviTacheService} from '../../../../shared/services/suivi-tache.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../shared/services/data.service';
import {ListeSuiviTachePesponse} from '../../../../models/suivi_tache.model';

@Component({
  selector: 'app-suivi-pta-loader',
  templateUrl: './suivi-pta-loader.component.html',
  styleUrls: ['./suivi-pta-loader.component.css']
})
export class SuiviPtaLoaderComponent implements OnInit {
  constructor(private suiviPTAService: SuiviTacheService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.suiviPTAService.getSuiviTacheList().subscribe((res: ListeSuiviTachePesponse) => {
      this.dataService.setSuiviTaches(res.data);
    } , (error) => {
    }, () => {
      this.router.navigate(['/dashboard/traitement/suivi_pta']);
    });
  }

}
