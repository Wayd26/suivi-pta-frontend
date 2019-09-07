import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StructureService } from 'src/app/shared/services/structure.service';
import { Structure, ListStructureResponse } from 'src/app/models/structure.model';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.css']
})
export class StructureListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  structures: Structure[];


  constructor(private structureService: StructureService, private router: Router, private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };
    this.structures = this.dataService.getStructures();
      this.structureService.getStructureList().subscribe((res: ListStructureResponse) => {
        this.dataService.setStructures(res.data);
      }, (erro) => {
        this.structures = [];
      }, () => {}
       );
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.structures)), 'structures');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.structures)), 'Structure');

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.structureService.deleteStructure(id).subscribe((res) => {
          this.structures = this.structures.filter((action) => {
            return action.identifiant !== id;
          });
          this.router.navigate(['/dashboard/fichier/base/programme']);
        }
      );
    }
  }

}
