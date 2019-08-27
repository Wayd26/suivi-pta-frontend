import { Component, OnInit } from '@angular/core';
import { Departement, ListDepartementResponse } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/shared/services/departement.service';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';

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
      if (!this.dataService.getDepartements()) {
        this.router.navigate(['/dashboard/fichier/localisation/departement/load']);
    }
    this.departements = this.dataService.getDepartements();
      this.departementService.getDepartementList().subscribe((res: ListDepartementResponse) => {
        this.dataService.setDepartements(res.data);
      } , (error) => {
        this.departements = [];
      }, () => {
      });
  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.departements = this.departements.filter((action) => {
        return action.identifiant !== id;
      });
      // this.activites.deleteStructure(id).subscribe((res) => {
      //
      //     this.router.navigate(['/dashboard/fichier/base/programme']);
      //   }
      // );
    }
  }

}
