import { Component, OnInit } from '@angular/core';
import { Ville, ListVilleResponse } from 'src/app/models/ville.model';
import { VilleService } from 'src/app/shared/services/ville.service';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-ville-list',
  templateUrl: './ville-list.component.html',
  styleUrls: ['./ville-list.component.css']
})
export class VilleListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  villes: Ville[];

  constructor(private villeService: VilleService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },
            { 'width': '20%', 'targets': 1 }
          ]
      };
    this.villes = this.dataService.getVilles();
      this.villeService.getVilleList().subscribe((res: ListVilleResponse) => {
        this.dataService.setVilles(res.data);
      } , (error) => {
        this.villes = [];
      }, () => {
      });
  }

}
