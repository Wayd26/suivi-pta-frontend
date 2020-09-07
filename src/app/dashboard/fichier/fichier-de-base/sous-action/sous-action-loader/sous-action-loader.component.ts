import { Component, OnInit } from '@angular/core';
import {ActionService} from '../../../../../shared/services/action.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListActionResponse} from '../../../../../models/action.model';
import {SousActionService} from '../../../../../shared/services/sous-action.service';
import {ListSousActionResponse} from '../../../../../models/sous_action.model';

@Component({
  selector: 'app-sous-action-loader',
  templateUrl: './sous-action-loader.component.html',
  styleUrls: ['./sous-action-loader.component.css']
})
export class SousActionLoaderComponent implements OnInit {

  constructor(private sousActionService: SousActionService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.sousActionService.getSousActionList().subscribe((res: ListSousActionResponse) => {
      this.dataService.setSousActions(res.data);
    }, (error) => {
      console.log(error);
    }, () => {
      this.router.navigate(['/dashboard/fichier/base/sous_action']);

    });
  }

}
