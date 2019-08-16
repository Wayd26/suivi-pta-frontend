import { Component, OnInit } from '@angular/core';
import { TypeSourceFinancementService } from 'src/app/shared/services/type-source-financement.service';
import { Router } from '@angular/router';
import { TypeSourceFinancement, ListTypeSourceFinancementResponse } from 'src/app/models/typeSourceFi.model';
import {DataService} from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-type-source-financement-list',
  templateUrl: './type-source-financement-list.component.html',
  styleUrls: ['./type-source-financement-list.component.css']
})
export class TypeSourceFinancementListComponent implements OnInit {
  typeSources: TypeSourceFinancement[];
  dtOptions: DataTables.Settings = {};


  constructor(private typeSourceFiService: TypeSourceFinancementService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers'
      };
    this.typeSources = this.dataService.getTypeSourceFis();
      this.typeSourceFiService.getTypeSourceFinancementList().subscribe((res: ListTypeSourceFinancementResponse) => {
        this.dataService.setTypeSourceFis(res.data);
      }, (error) => {
        this.typeSources = [];
      }, () => {
      });
  }

}
