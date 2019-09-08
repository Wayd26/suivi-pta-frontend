import { Component, OnInit } from '@angular/core';
import {StructureService} from '../../../../shared/services/structure.service';
import {ListStructureResponse} from '../../../../models/structure.model';
import {ActionService} from '../../../../shared/services/action.service';
import {ListActionResponse} from '../../../../models/action.model';

@Component({
  selector: 'app-tep-action',
  templateUrl: './tep-action.component.html',
  styleUrls: ['./tep-action.component.css']
})
export class TepActionComponent implements OnInit {
  model2;
  singleSelectOptionsAction: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValueAction: string[] = [''];
  constructor(private actionService: ActionService) { }

  ngOnInit() {
    this.message = '';
    this.actionService.getActionList()
      .subscribe((res: ListActionResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptionsAction.push({
            label: exo.libelle,
            value: exo.identifiant,
            code: exo.identifiant
          });
        });
      });
  }
}
