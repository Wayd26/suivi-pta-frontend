import { Component, OnInit } from '@angular/core';
import { MinistereService } from 'src/app/shared/services/ministere.service';
import { Ministere, ListMinistereResponse } from 'src/app/models/ministere.model';
import { Router } from '@angular/router';
import {ListSourceFinancementResponse} from '../../../../../models/sourceFi.model';

@Component({
  selector: 'app-ministere-list',
  templateUrl: './ministere-list.component.html',
  styleUrls: ['./ministere-list.component.css']
})
export class MinistereListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  Ministeres: Ministere[];
  constructor(private ministereService: MinistereService, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers',
      columnDefs: [
        { 'width': '20%', 'targets': 0 },

      ]
    };

    this.ministereService.getMinistereList().subscribe((res: ListMinistereResponse) => {
      this.Ministeres = res.data;
    }, (error) => {
      this.Ministeres = [];
    });
  }

}
