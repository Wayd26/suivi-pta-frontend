import { Component, OnInit } from '@angular/core';
import { TypeSourceFinancementService } from 'src/app/shared/services/type-source-financement.service';
import { Router } from '@angular/router';
import { TypeSourceFinancement, ListTypeSourceFinancementResponse, TypeSourceFinancementExport } from 'src/app/models/typeSourceFi.model';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-type-source-financement-list',
  templateUrl: './type-source-financement-list.component.html',
  styleUrls: ['./type-source-financement-list.component.css']
})
export class TypeSourceFinancementListComponent implements OnInit {
  typeSources: TypeSourceFinancement[] = [];
  dtOptions: DataTables.Settings = {};
  typeExport: TypeSourceFinancementExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'libelle'],
    nullToEmptyString: true,
  };


  constructor(private typeSourceFiService: TypeSourceFinancementService,
    private router: Router, private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '380',
          pagingType: 'full_numbers'
      };
    //   if (!this.dataService.getTypeSourceFis()) {
    //     this.router.navigate(['/dashboard/fichier/financement/type/source/load']);
    // }

    this.typeSources = this.dataService.getTypeSourceFis();
      this.typeSourceFiService.getTypeSourceFinancementList().subscribe((res: ListTypeSourceFinancementResponse) => {
        this.dataService.setTypeSourceFis(res.data);
      }, (error) => {
        this.typeSources = [];
      }, () => {
      });
      this.typeSources.map((d) => {
        this.typeExport.push({
          identifiant: d.id,
          code: d.code,
          libelle: d.denomination
      });
      });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.typeExport)), 'typeSources');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.typeExport)), 'Type Source Financement');

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.typeSourceFiService.deleteTypeSource(id).subscribe((res) => {
          this.typeSources = this.typeSources.filter((action) => {
            return action.id !== id;
          });
          this.router.navigate(['/dashboard/fichier/financement/type/source/load']);
        }
      );
    }
  }
}
