import { Component, OnInit } from '@angular/core';
import {SourceFinancementService} from '../../../../shared/services/source-financement.service';
import {Router} from '@angular/router';
import {ListSourceFinancementResponse, SourceFinancement} from '../../../../models/sourceFi.model';
import {DataService} from '../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../constants/urlConstants';


@Component({
  selector: 'app-source-financement-list',
  templateUrl: './source-financement-list.component.html',
  styleUrls: ['./source-financement-list.component.css']
})
export class SourceFinancementListComponent implements OnInit {
  Sources: SourceFinancement[];
  dtOptions: DataTables.Settings = {};

  constructor(private SourceFiService: SourceFinancementService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '500',
      pagingType: 'full_numbers'
    };
    this.Sources = this.dataService.getSourceFis();
    this.SourceFiService.getSourceFinancementList().subscribe((res: ListSourceFinancementResponse) => {
      this.dataService.setSourceFis(res.data);
    }, (error) => {
      this.Sources = [];
    }, () => {
    });
  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
    if (response) {
      this.Sources = this.Sources.filter((action) => {
        return action.identifiant !== id;
      });
      // this.activites.deleteStructure(id).subscribe((res) => {
      //
      //     this.router.navigate(['/dashboard/fichier/base/programme']);
      //   }
      // );
    }
  }

}
