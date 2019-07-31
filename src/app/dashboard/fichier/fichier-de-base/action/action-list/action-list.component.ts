import { Component, OnInit } from '@angular/core';
import { Action, ListActionResponse } from 'src/app/models/action.model';
import { ActionService } from 'src/app/shared/services/action.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  actions: Action[];

  constructor(private actionService: ActionService, private router: Router) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 1 },

          ]
      };

      this.actionService.getActionList().subscribe((res: ListActionResponse) => {
        this.actions = res.data;
        console.log(this.actions);
      }, (error) => {
        this.actions = [];
      });
  }

}
