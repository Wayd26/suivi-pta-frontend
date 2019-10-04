import { Component, OnInit } from '@angular/core';
import { Tache, ListTacheResponse, TacheExport } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/shared/services/tache.service';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-taches-list',
  templateUrl: './taches-list.component.html',
  styleUrls: ['./taches-list.component.css']
})
export class TachesListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  taches: Tache[] = [];
  tacheExport: TacheExport[] = [];
  tache: TacheExport;
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'libelle', 'code'],
    nullToEmptyString: true,
  };

  constructor(private tacheService: TacheService, private router: Router,
     private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '380',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };
    //   if (!this.dataService.getTaches()) {
    //     this.router.navigate(['/dashboard/fichier/base/tache/load']);
    // }
    this.taches = this.dataService.getTaches();
      this.tacheService.getTacheList().subscribe((res: ListTacheResponse) => {
        this.dataService.setTaches(res.data);
      } , (error) => {
        this.taches = [];
      }, () => {

      });

      this.taches.map((p) => {
        this.tacheExport.push({
          identifiant: p.identifiant,
          libelle: p.libelle,
          code: p.code
        });
      });
      // this.taches.map((p) => {
      //   this.tache.identifiant = p.identifiant;
      //   this.tache.libelle = p.libelle;
      //   this.tache.code = p.code;
      //   this.tacheExport.push(this.tache);
      //   });
  }
  execelExport() {
     this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.tacheExport)), 'tache');
  }
  csvExport() {
    console.log(JSON.stringify(this.tacheExport));
    return new Angular5Csv(JSON.parse(JSON.stringify(this.tacheExport)), 'Tache');

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.tacheService.deleteTache(id).subscribe((res) => {
          this.taches = this.taches.filter((action) => {
            return action.identifiant !== id;
          });
          this.router.navigate(['/dashboard/fichier/base/tache']);
        }
      );
    }
  }

}
