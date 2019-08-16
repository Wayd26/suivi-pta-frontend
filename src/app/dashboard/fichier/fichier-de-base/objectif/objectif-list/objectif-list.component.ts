import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListObjectifResponse, ObjectifModel} from '../../../../../models/objectif.model';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {DataService} from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-objectif-list',
  templateUrl: './objectif-list.component.html',
  styleUrls: ['./objectif-list.component.css']
})
export class ObjectifListComponent implements OnInit {
  Objectifs: ObjectifModel[];
  dtOptions: DataTables.Settings = {};

  constructor(private objectifService: ObjectifService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers'
    };
    this.Objectifs = this.dataService.getObjectifs();
    this.objectifService.getObjectifList().subscribe((res: ListObjectifResponse) => {
      this.dataService.setObjectifs(res.data);
    }, (error) => {
      this.Objectifs = [];
    }, () => {
    });
  }

}
