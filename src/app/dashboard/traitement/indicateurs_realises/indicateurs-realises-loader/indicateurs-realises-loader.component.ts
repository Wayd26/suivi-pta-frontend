import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {IndicateurService} from '../../../../shared/services/indicateur.service';
import {DataService} from '../../../../shared/services/data.service';
import {ListIndicateurResponse} from '../../../../models/indicateur.model';


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
      this.router.navigate(['/dashboard/traitement/indicateurs_realises']);
    });
  }

}
