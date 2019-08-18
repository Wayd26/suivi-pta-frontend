import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {Router} from '@angular/router';
import {ListObjectifResponse, ObjectifSpecifique} from '../../../../../models/objectifSpecifique.model';
import {ObjectifSpecifiqueService} from '../../../../../shared/services/objectif-specifique.service';

@Component({
  selector: 'app-objectif-specifique-list',
  templateUrl: './objectif-specifique-list.component.html',
  styleUrls: ['./objectif-specifique-list.component.css']
})
export class ObjectifSpecifiqueListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  objectifSpecifiques: ObjectifSpecifique[];

  constructor(private objectifSpecifiqueService: ObjectifSpecifiqueService, private router: Router) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers',
      columnDefs: [
        {'width': '20%', 'targets': 0},

      ]
    };

    this.objectifSpecifiqueService.getObjectifList().subscribe((res: ListObjectifResponse) => {
      this.objectifSpecifiques = res.data
    }, (error) => {
      this.objectifSpecifiques = []
    }, () => {

    })

  }
}
