import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListObjectifResponse, ObjectifModel, ObjectifModelExport} from '../../../../../models/objectif.model';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-objectif-list',
  templateUrl: './objectif-list.component.html',
  styleUrls: ['./objectif-list.component.css']
})
export class ObjectifListComponent implements OnInit {
  Objectifs: ObjectifModel[] = [];
  dtOptions: DataTables.Settings = {};
  objectifExport: ObjectifModelExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'libelle', '_programme'],
    nullToEmptyString: true,
  };

  constructor(private objectifService: ObjectifService, private router: Router,
     private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '380',
      pagingType: 'full_numbers'
    };
  //   if (!this.dataService.getObjectifs()) {
  //     this.router.navigate(['/dashboard/fichier/base/objectif/load']);
  // }
    this.Objectifs = this.dataService.getObjectifs();
    this.objectifService.getObjectifList().subscribe((res: ListObjectifResponse) => {
      this.dataService.setObjectifs(res.data);
    }, (error) => {
      this.Objectifs = [];
    }, () => {
    });
    this.Objectifs.map((o) => {
      this.objectifExport.push({
        identifiant: o.identifiant,
        code: o.code,
        libelle: o.libelle,
        _programme: o._programme
      });
    });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.objectifExport)), 'objectif');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.objectifExport)), 'Objectif');

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.Objectifs = this.Objectifs.filter((action) => {
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
