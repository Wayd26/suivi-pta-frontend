import { Component, OnInit } from '@angular/core';
import { MinistereService } from 'src/app/shared/services/ministere.service';
import { Ministere, ListMinistereResponse, MinistereExport } from 'src/app/models/ministere.model';
import { Router } from '@angular/router';
import {ListSourceFinancementResponse} from '../../../../../models/sourceFi.model';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-ministere-list',
  templateUrl: './ministere-list.component.html',
  styleUrls: ['./ministere-list.component.css']
})
export class MinistereListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  Ministeres: Ministere[];
  ministereExport: MinistereExport[];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'denomination', 'sigle', 'bp', 'email', 'telephone', 'site_web', '_departement', '_ville'],
    nullToEmptyString: true,
  };
  constructor(private ministereService: MinistereService, private router: Router,
     private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers',
      columnDefs: [
        { 'width': '20%', 'targets': 0 },

      ]
    };
    if (!this.dataService.getMinisteres()) {
      this.router.navigate(['/dashboard/fichier/base/ministere/load']);
  }
    this.Ministeres = this.dataService.getMinisteres();
    this.ministereService.getMinistereList().subscribe((res: ListMinistereResponse) => {
      this.dataService.setMinisteres(res.data);
    }, (error) => {
      this.Ministeres = [];
    }, () => {
    });
    this.Ministeres.map((m) => {
      this.ministereExport.push({
        identifiant: m.identifiant,
        code: m.code,
        denomination: m.denomination,
        sigle: m.sigle,
        bp: m.sigle,
        email: m.email,
        telephone: m.telephone,
        site_web: m.site_web,
        _departement: m._departement,
        _ville: m._ville
      });
    });
  }

  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.ministereExport)), 'ministere');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.ministereExport)), 'Ministere', this.options);

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.Ministeres = this.Ministeres.filter((action) => {
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
