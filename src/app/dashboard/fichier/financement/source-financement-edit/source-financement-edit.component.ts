import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-source-financement-edit',
  templateUrl: './source-financement-edit.component.html',
  styleUrls: ['./source-financement-edit.component.css']
})
export class SourceFinancementEditComponent implements OnInit {


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
  onSubmit(form: NgForm) {

  }

}
