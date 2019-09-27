import { Component, OnInit } from '@angular/core';
import { Action, ListActionResponse, ActionExport } from 'src/app/models/action.model';
import { ActionService } from 'src/app/shared/services/action.service';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';


@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  actions: Action[] = [];
  actionExport: ActionExport[] = [];
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

  constructor(private actionService: ActionService, private router: Router,
     private dataService: DataService , private exportService: ExportAsExelService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '380',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 1 },

          ]
      };
      if (!this.dataService.getActions()) {
          this.router.navigate(['/dashboard/fichier/base/action/load']);
      } else {
        this.actions = this.dataService.getActions();
      this.actionService.getActionList().subscribe((res: ListActionResponse) => {
        this.dataService.setActions(res.data);
        console.log(this.actions);
      }, (error) => {
        console.log(error);
        this.actions = [];
      }, () => {

      });
      }

      this.actions.map((a) => {
        this.actionExport.push({
          identifiant: a.identifiant,
          code: a.code,
          libelle: a.libelle,
          poids: a.poids,
          montant: a.montant,
          _resultat: a._resultat
      });
      });

  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.actionExport)), 'action');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.actionExport)), 'Action');

  }
  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.actionService.deleteAction(id).subscribe((res) => {
          this.actions = this.actions.filter((action) => {
            return action.identifiant !== id;
          });
          this.router.navigate(['/dashboard/fichier/base/action']);
        }
      );
    }
  }


}
