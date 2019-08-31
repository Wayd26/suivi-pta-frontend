import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListObjectifResponse, ObjectifModel} from '../../../../../models/objectif.model';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';

@Component({
  selector: 'app-objectif-list',
  templateUrl: './objectif-list.component.html',
  styleUrls: ['./objectif-list.component.css']
})
export class ObjectifListComponent implements OnInit {
  Objectifs: ObjectifModel[];
  dtOptions: DataTables.Settings = {};

  constructor(private objectifService: ObjectifService, private router: Router, private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers'
    };
    this.Objectifs = this.dataService.getObjectifs();
    this.objectifService.getObjectifList().subscribe((res: ListObjectifResponse) => {
      this.dataService.setObjectifs(res.data);
    }, (error) => {
      this.Objectifs = [];
    }, () => {
    });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.Objectifs)), 'test');
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
