import { Component, OnInit } from '@angular/core';
import {ListObjectifResponse, ObjectifModel} from '../../../../../models/objectif.model';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ListeResultatResponse, Resultat} from '../../../../../models/resultat.model';
import {ResultatService} from '../../../../../shared/services/resultat.service';

@Component({
  selector: 'app-resultat-list',
  templateUrl: './resultat-list.component.html',
  styleUrls: ['./resultat-list.component.css']
})
export class ResultatListComponent implements OnInit {

  Resultats: Resultat[];
  dtOptions: DataTables.Settings = {};

  constructor(private resultatService: ResultatService, private router: Router, private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers'
    };
    if (!this.dataService.getResultats()) {
      this.router.navigate(['/dashboard/fichier/base/resultat/load']);
    }
    this.Resultats = this.dataService.getResultats();
    this.resultatService.getResultatList().subscribe((res: ListeResultatResponse) => {
      this.dataService.setResultats(res.data);
    }, (error) => {
      this.Resultats = [];
    }, () => {
    });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.Resultats)), 'resultat');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.Resultats)), 'Resultat');

  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.Resultats = this.Resultats.filter((action) => {
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
