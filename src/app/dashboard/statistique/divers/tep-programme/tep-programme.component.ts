import { Component, OnInit } from '@angular/core';
import {ActionService} from '../../../../shared/services/action.service';
import {ListActionResponse} from '../../../../models/action.model';
import {ProgrammeService} from '../../../../shared/services/programme.service';
import {ListProgrammeResponse} from '../../../../models/programme.model';

@Component({
  selector: 'app-tep-programme',
  templateUrl: './tep-programme.component.html',
  styleUrls: ['./tep-programme.component.css']
})
export class TepProgrammeComponent implements OnInit {
  model2;
  singleSelectOptionsProgramme: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValueProgramme: string[] = [''];
  constructor(private programmeService: ProgrammeService) { }

  ngOnInit() {
    this.message = '';
    this.programmeService.getProgrammeList()
      .subscribe((res: ListProgrammeResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptionsProgramme.push({
            label: exo.libelle,
            value: exo.identifiant,
            code: exo.identifiant
          });
        });
      });
  }

}
