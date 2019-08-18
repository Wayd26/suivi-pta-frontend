import { Component, OnInit } from '@angular/core';
import {ListActionResponse} from '../../../../../models/action.model';
import {ActionService} from '../../../../../shared/services/action.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-action-loader',
  templateUrl: './action-loader.component.html',
  styleUrls: ['./action-loader.component.css']
})
export class ActionLoaderComponent implements OnInit {

  constructor(private actionService: ActionService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.actionService.getActionList().subscribe((res: ListActionResponse) => {
      this.dataService.setActions(res.data);
    }, (error) => {
      console.log(error);
    }, () => {
      this.router.navigate(['/dashboard/fichier/base/action']);

    });
  }

}
