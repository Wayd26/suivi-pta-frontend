import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tep-pip',
  templateUrl: './tep-pip.component.html',
  styleUrls: ['./tep-pip.component.css']
})
export class TepPipComponent implements OnInit {
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
