import { Component, OnInit } from '@angular/core';
import { Departement, ListDepartementResponse, DepartementExport } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/shared/services/departement.service';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  departements: Departement[] = [];
  departementExport: DepartementExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'denomination'],
    nullToEmptyString: true,
  };

  constructor(private departementService: DepartementService, private router: Router,
     private dataService: DataService, private exportService: ExportAsExelService ) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '380',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };
    //   if (!this.dataService.getDepartements()) {
    //     this.router.navigate(['/dashboard/fichier/localisation/departement/load']);
    // }
    this.departements = this.dataService.getDepartements();
      this.departementService.getDepartementList().subscribe((res: ListDepartementResponse) => {
        this.dataService.setDepartements(res.data);
      } , (error) => {
        this.departements = [];
      }, () => {
      });
      this.departements.map((d) => {
        this.departementExport.push({
          identifiant: d.id,
          code: d.code,
          denomination: d.denomination
      });
      });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.departementExport)), 'departements');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.departementExport)), 'Departements');

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.departementService.deleteDepartement(id).subscribe((res) => {
          this.departements = this.departements.filter((action) => {
            return action.id !== id;
          });
          this.router.navigate(['/dashboard/fichier/localisation/departement/load']);
        }
      );
    }
  }

}
