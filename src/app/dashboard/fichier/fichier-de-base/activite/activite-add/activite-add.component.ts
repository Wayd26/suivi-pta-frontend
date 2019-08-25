import { Component, OnInit } from '@angular/core';
import {Structure} from '../../../../../models/structure.model';

@Component({
  selector: 'app-activite-add',
  templateUrl: './activite-add.component.html',
  styleUrls: ['./activite-add.component.css']
})
export class ActiviteAddComponent implements OnInit {
  public isCompleted: any;
  public onStep2Next: any;
  public onStep3Next: any;
  public onComplete: any;
  model2;
  structures: Structure[];
  singleSelectOptions: any = [
    {
      label: 'Angular',
      value: 'angular',
      code: 'NG'
    }, {
      label: 'ReactJS',
      value: 'reactjs',
      code: 'RJS'
    }, {
      label: 'Ember JS',
      value: 'emberjs',
      code: 'emjs'
    }, {
      label: 'Ruby on Rails',
      value: 'ruby_on_rails',
      code: 'ROR'
    }
  ];

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = ['reactjs'];
  constructor() { }

  ngOnInit() {
  }

}
