import { Component, OnInit } from '@angular/core';
import {SourceFinancementService} from '../../../../shared/services/source-financement.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../shared/services/data.service';
import {ListSourceFinancementResponse} from '../../../../models/sourceFi.model';

@Component({
  selector: 'app-source-loader',
  templateUrl: './source-loader.component.html',
  styleUrls: ['./source-loader.component.css']
})
export class SourceLoaderComponent implements OnInit {

  constructor(private SourceFiService: SourceFinancementService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.SourceFiService.getSourceFinancementList().subscribe((res: ListSourceFinancementResponse) => {
      this.dataService.setSourceFis(res.data);
    }, (error) => {
    }, () => {
      this.router.navigate(['/dashboard/fichier/financement/source']);
    });
  }

}
