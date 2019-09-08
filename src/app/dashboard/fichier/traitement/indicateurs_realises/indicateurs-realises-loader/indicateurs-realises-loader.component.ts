import { Component, OnInit } from '@angular/core';
import {VilleService} from '../../../../../shared/services/ville.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListVilleResponse} from '../../../../../models/ville.model';
import {IndicateurService} from '../../../../../shared/services/indicateur.service';
import {ListIndicateurResponse} from '../../../../../models/indicateur.model';

@Component({
  selector: 'app-indicateurs-realises-loader',
  templateUrl: './indicateurs-realises-loader.component.html',
  styleUrls: ['./indicateurs-realises-loader.component.css']
})
export class IndicateursRealisesLoaderComponent implements OnInit {
  constructor(private indicService: IndicateurService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.indicService.getIndicateurList().subscribe((res: ListIndicateurResponse) => {
      this.dataService.setIndicateurs(res.data);
    } , (error) => {
    }, () => {
      this.router.navigate(['/dashboard/fichier/traitement/indicateurs_realises']);
    });
  }

}
