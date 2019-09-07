import { Component, OnInit } from '@angular/core';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {Departement, ListDepartementResponse} from '../../../../../models/departement.model';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {IndicateurService} from '../../../../../shared/services/indicateur.service';
import {Indicateur, ListIndicateurResponse} from '../../../../../models/indicateur.model';

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
      this.departements = [];
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
