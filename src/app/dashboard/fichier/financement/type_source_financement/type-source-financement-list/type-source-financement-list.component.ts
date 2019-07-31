import { Component, OnInit } from '@angular/core';
import { TypeSourceFinancementService } from 'src/app/shared/services/type-source-financement.service';
import { Router } from '@angular/router';
import { TypeSourceFinancement, ListTypeSourceFinancementResponse } from 'src/app/models/typeSourceFi.model';

@Component({
  selector: 'app-type-source-financement-list',
  templateUrl: './type-source-financement-list.component.html',
  styleUrls: ['./type-source-financement-list.component.css']
})
export class TypeSourceFinancementListComponent implements OnInit {
  typeSources: TypeSourceFinancement[];
  dtOptions: DataTables.Settings = {};


  constructor(private typeSourceFiService: TypeSourceFinancementService, private router: Router) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers'
      };

      this.typeSourceFiService.getTypeSourceFinancementList().subscribe((res: ListTypeSourceFinancementResponse) => {
        this.typeSources = res.data;
      }, (error) => {
        this.typeSources = [];
      });
  }

}
