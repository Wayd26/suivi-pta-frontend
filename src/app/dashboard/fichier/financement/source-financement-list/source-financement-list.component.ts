import { Component, OnInit } from '@angular/core';
import {SourceFinancementService} from '../../../../shared/services/source-financement.service';
import {Router} from '@angular/router';
import {ListSourceFinancementResponse, SourceFinancement} from '../../../../models/sourceFi.model';


@Component({
  selector: 'app-source-financement-list',
  templateUrl: './source-financement-list.component.html',
  styleUrls: ['./source-financement-list.component.css']
})
export class SourceFinancementListComponent implements OnInit {
  Sources: SourceFinancement[];
  dtOptions: DataTables.Settings = {};

  constructor(private SourceFiService: SourceFinancementService, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers'
    };

    this.SourceFiService.getSourceFinancementList().subscribe((res: ListSourceFinancementResponse) => {
      this.Sources = res.data;
    }, (error) => {
      this.Sources = [];
    });
  }

}
