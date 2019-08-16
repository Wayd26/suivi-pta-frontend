import { Component, OnInit } from '@angular/core';
import { Departement, ListDepartementResponse } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/shared/services/departement.service';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  departements: Departement[];

  constructor(private departementService: DepartementService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };
    this.departements = this.dataService.getDepartements();
      this.departementService.getDepartementList().subscribe((res: ListDepartementResponse) => {
        this.dataService.setDepartements(res.data);
      } , (error) => {
        this.departements = [];
      }, () => {
      });
  }

}
