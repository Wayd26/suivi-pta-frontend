import { Component, OnInit } from '@angular/core';
import { Action, ListActionResponse } from 'src/app/models/action.model';
import { ActionService } from 'src/app/shared/services/action.service';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';


@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  actions: Action[];

  constructor(private actionService: ActionService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 1 },

          ]
      };
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
