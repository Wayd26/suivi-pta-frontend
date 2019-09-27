import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Exercice, ListExerciceResponse} from '../../../../models/exercice.model';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {DataService} from '../../../../shared/services/data.service';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.css']
})
export class ExerciceListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  exercices: Exercice[];

  constructor(private exerciceService: ExercieService, private router: Router, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '380',
      pagingType: 'full_numbers',
      columnDefs: [
        {'width': '20%', 'targets': 0},
        {'width': '20%', 'targets': 1}
      ]
    };
    this.exercices = this.dataService.getExercices();
    this.exerciceService.getExerciceList().subscribe((res: ListExerciceResponse) => {
      this.dataService.setExercices(res.data);
    }, (error) => {
      this.exercices = [];
    }, () => {
    });
  }
}
