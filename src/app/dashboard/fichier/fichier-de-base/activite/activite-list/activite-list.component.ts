import { Component, OnInit } from '@angular/core';
import { ActiviteService } from 'src/app/shared/services/activite.service';
import { Router } from '@angular/router';
import { Activite, ListActiviteResponse } from 'src/app/models/activite.model';
import { ListActionResponse } from 'src/app/models/action.model';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';

@Component({
  selector: 'app-activite-list',
  templateUrl: './activite-list.component.html',
  styleUrls: ['./activite-list.component.css']
})
export class ActiviteListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  activites: Activite[];

  constructor(private activiteService: ActiviteService, private router: Router, private dataService: DataService) { }

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
