import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from '../../../../shared/services/programme.service';

@Component({
  selector: 'app-tep-pta',
  templateUrl: './tep-pta.component.html',
  styleUrls: ['./tep-pta.component.css']
})
export class TepPtaComponent implements OnInit {
  model2;
  singleSelectOptionsProgramme: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValueProgramme: string[] = [''];
  constructor() { }

  ngOnInit() {
    this.message = '';
  }

}
