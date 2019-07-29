import { Component, OnInit } from '@angular/core';
import { Departement, ListDepartementResponse } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/shared/services/departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  departements: Departement[];

  constructor(private departementService: DepartementService, private router: Router) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };

      this.departementService.getDepartementList().subscribe((res: ListDepartementResponse) => {
        this.departements = res.data;
      } , (error) => {
        this.departements = [];
      });
  }

}
