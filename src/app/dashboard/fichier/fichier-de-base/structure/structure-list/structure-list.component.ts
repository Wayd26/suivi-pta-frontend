import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StructureService } from 'src/app/shared/services/structure.service';
import { Structure, ListStructureResponse, StructureExport } from 'src/app/models/structure.model';
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
  structures: Structure[] = [];
  structureExport: StructureExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'sigle', 'bp', 'denomination', 'email', 'telephone', 'site_web', 'logo', '_ville', '_departement'],
    nullToEmptyString: true,
  };


  constructor(private structureService: StructureService, private router: Router,
    private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '380',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };
    //   if (!this.dataService.getStructures()) {
    //     this.router.navigate(['/dashboard/fichier/base/structures/load']);
    // }
    this.structures = this.dataService.getStructures();
      this.structureService.getStructureList().subscribe((res: ListStructureResponse) => {
        this.dataService.setStructures(res.data);
      }, (erro) => {
        this.structures = [];
      }, () => {}
       );

       this.structures.map((m) => {
        this.structureExport.push({
          identifiant: m.identifiant,
          code: m.code,
          sigle: m.sigle,
          bp: m.sigle,
          denomination: m.denomination,
          email: m.email,
          telephone: m.telephone,
          site_web: m.site_web,
          logo: m.logo,
          _ville: m._ville,
          _departement: m._departement
        });
      });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.structureExport)), 'structures');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.structureExport)), 'Structure');

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
