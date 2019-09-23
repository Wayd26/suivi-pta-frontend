import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {Indicateur, ListIndicateurResponse} from '../../../../models/indicateur.model';
import {IndicateurService} from '../../../../shared/services/indicateur.service';
import {DataService} from '../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../constants/urlConstants';


@Component({
  selector: 'app-indicateurs-realises-list',
  templateUrl: './indicateurs-realises-list.component.html',
  styleUrls: ['./indicateurs-realises-list.component.css']
})
export class IndicateursRealisesListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  indicateurs: Indicateur[];


  constructor(private indicateurService: IndicateurService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers',
      columnDefs: [
        { 'width': '20%', 'targets': 0 },

      ]
    };
    this.indicateurs = this.dataService.getIndicateurs();
    this.indicateurService.getIndicateurList().subscribe((res: ListIndicateurResponse) => {
      this.dataService.setIndicateurs(res.data);
    } , (error) => {
      this.indicateurs = [];
    }, () => {
    });
  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.indicateurs = this.indicateurs.filter((indicateurs) => {
        return indicateurs.identifiant !== id;
      });
    }
  }

}
