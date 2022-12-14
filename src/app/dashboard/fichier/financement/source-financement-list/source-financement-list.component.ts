import { Component, OnInit } from '@angular/core';
import {SourceFinancementService} from '../../../../shared/services/source-financement.service';
import {Router} from '@angular/router';
import {ListSourceFinancementResponse, SourceFinancement, SourceFinancementExport} from '../../../../models/sourceFi.model';
import {DataService} from '../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';


@Component({
  selector: 'app-source-financement-list',
  templateUrl: './source-financement-list.component.html',
  styleUrls: ['./source-financement-list.component.css']
})
export class SourceFinancementListComponent implements OnInit {
  Sources: SourceFinancement[] = [];
  dtOptions: DataTables.Settings = {};
  sourceExport: SourceFinancementExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'est_projet', 'libelle', 'poids_projet', 'chapitre_imputation', '_type'],
    nullToEmptyString: true,
  };

  constructor(private SourceFiService: SourceFinancementService,
    private router: Router, private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '380',
      pagingType: 'full_numbers'
    };
  //   if (!this.dataService.getSourceFis()) {
  //     this.router.navigate(['/dashboard/fichier/financement/source/load']);
  // }
    this.Sources = this.dataService.getSourceFis();
    this.SourceFiService.getSourceFinancementList().subscribe((res: ListSourceFinancementResponse) => {
      this.dataService.setSourceFis(res.data);
    }, (error) => {
      this.Sources = [];
    }, () => {
    });
    this.Sources.map((s) => {
      this.sourceExport.push({
        identifiant: s.id,
        code: s.code,
        est_projet: s.is_project,
        libelle: s.denomination,
        poids_projet: s.weight_project,
        chapitre_imputation: s.imputation_chapter,
        _type: s._type_funding
      });
    });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.sourceExport)), 'sources');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.sourceExport)), 'Source Financement');

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.SourceFiService.deleteSourceFinamcement(id).subscribe((res) => {
          this.Sources = this.Sources.filter((action) => {
            return action.id !== id;
          });
          this.router.navigate(['/dashboard/fichier/financement/source/load']);
        }
      );
    }
  }

}
