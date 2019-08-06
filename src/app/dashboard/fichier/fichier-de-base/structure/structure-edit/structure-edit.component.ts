import { Component, OnInit } from '@angular/core';
import {ListStructureResponse, Structure} from '../../../../../models/structure.model';
import {StructureService} from '../../../../../shared/services/structure.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-structure-edit',
  templateUrl: './structure-edit.component.html',
  styleUrls: ['./structure-edit.component.css']
})
export class StructureEditComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  structures: Structure[];

  constructor(private structureService: StructureService, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers',
      columnDefs: [
        { 'width': '20%', 'targets': 0 },

      ]
    };

    this.structureService.getStructureList().subscribe((res: ListStructureResponse) => {
      this.structures = res.data;
    }, (erro) => {
      this.structures = [];
    } );
  }

}

