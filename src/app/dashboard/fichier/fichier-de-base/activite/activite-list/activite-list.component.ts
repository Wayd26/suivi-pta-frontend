import { Component, OnInit } from '@angular/core';
import { ActiviteService } from 'src/app/shared/services/activite.service';
import { Router } from '@angular/router';
import { Activite, ListActiviteResponse } from 'src/app/models/activite.model';
import { ListActionResponse } from 'src/app/models/action.model';

@Component({
  selector: 'app-activite-list',
  templateUrl: './activite-list.component.html',
  styleUrls: ['./activite-list.component.css']
})
export class ActiviteListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  activites: Activite[];

  constructor(private activiteService: ActiviteService, private router: Router) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 1 },

          ]
      };

      this.activiteService.getActiviteList().subscribe((res: ListActiviteResponse) => {
          this.activites = res.data;
      } , (error) => {
        this.activites = [];
      });
  }

}
