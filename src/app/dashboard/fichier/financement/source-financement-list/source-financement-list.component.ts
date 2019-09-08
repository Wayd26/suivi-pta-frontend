import { Component, OnInit } from '@angular/core';
import {SourceFinancementService} from '../../../../shared/services/source-financement.service';
import {Router} from '@angular/router';
import {ListSourceFinancementResponse, SourceFinancement} from '../../../../models/sourceFi.model';
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
  Sources: SourceFinancement[];
  dtOptions: DataTables.Settings = {};

  constructor(private SourceFiService: SourceFinancementService, private router: Router, private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers'
    };
    if (!this.dataService.getSourceFis()) {
      this.router.navigate(['/dashboard/fichier/financement/source/load']);
  }
    this.Sources = this.dataService.getSourceFis();
    this.SourceFiService.getSourceFinancementList().subscribe((res: ListSourceFinancementResponse) => {
      this.dataService.setSourceFis(res.data);
    }, (error) => {
      this.Sources = [];
    }, () => {
    });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.Sources)), 'sources');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.Sources)), 'Source Financement');

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.Sources = this.Sources.filter((action) => {
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
