import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {SuiviTacheService} from '../../../../../shared/services/suivi-tache.service';
import {ListeSuiviTachePesponse} from '../../../../../models/suivi_tache.model';

@Component({
  selector: 'app-programmation-des-taches-loader',
  templateUrl: './programmation-des-taches-loader.component.html',
  styleUrls: ['./programmation-des-taches-loader.component.css']
})
export class ProgrammationDesTachesLoaderComponent implements OnInit {

  constructor(private suiviTacheService: SuiviTacheService, private router: Router, private dataService: DataService) { }

  ngOnInit() {

    this.suiviTacheService.getSuiviTacheList().subscribe((res: ListeSuiviTachePesponse) => {
      this.dataService.setSuiviTaches(res.data) ;
    }, (error) => {}, () => {
      this.router.navigate(['/dashboard/fichier/traitement/programmation_des_taches']);
    });
  }

}
