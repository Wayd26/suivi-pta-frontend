import { Component, OnInit } from '@angular/core';
import { ActiviteService } from 'src/app/shared/services/activite.service';
import { Router } from '@angular/router';
import {Activite, ActiviteExport, ListActiviteResponse} from 'src/app/models/activite.model';
import { ListActionResponse } from 'src/app/models/action.model';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-activite-list',
  templateUrl: './activite-list.component.html',
  styleUrls: ['./activite-list.component.css']
})
export class ActiviteListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  activites: Activite[] = [];
  activiteExport: ActiviteExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'libelle', 'poids', 'montant', '_resultat'],
    nullToEmptyString: true,
  };

  constructor(private activiteService: ActiviteService, private router: Router, private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers'
      };
      if (!this.dataService.getActivites()) {
        this.router.navigate(['/dashboard/fichier/base/activite/load']);
    }
      this.activites = this.dataService.getActivites();

      this.activiteService.getActiviteList().subscribe((res: ListActiviteResponse) => {
          this.dataService.setActivites(res.data);
      } , (error) => {
        this.activites = [];
      }, () => {

      });
      this.activites.map((a) => {
        this.activiteExport.push({
          identifiant: a.identifiant,
        code: a.code,
        date_debut: a.date_debut,
        date_fin: a.date_fin,
        libelle: a.libelle,
        activite_pip: a.activite_pip,
        mode: a.mode,
        montant: a.montant,
        poids: a.poids,
        _exercice: a._exercice,
        _action: a._action,
        _structure_executant: a._structure_executant

      });
      });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.activiteExport)), 'action');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.activiteExport)), 'Activite');

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.activites = this.activites.filter((action) => {
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
