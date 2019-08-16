import { Component, OnInit } from '@angular/core';
import { Tache, ListTacheResponse } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/shared/services/tache.service';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-taches-list',
  templateUrl: './taches-list.component.html',
  styleUrls: ['./taches-list.component.css']
})
export class TachesListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  taches: Tache[];

  constructor(private tacheService: TacheService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };
    this.taches = this.dataService.getTaches();
      this.tacheService.getTacheList().subscribe((res: ListTacheResponse) => {
        this.dataService.setTaches(res.data);
      } , (error) => {
        this.taches = [];
      }, () => {

      });
  }

}
