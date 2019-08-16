import { Component, OnInit } from '@angular/core';
import {TypeSourceFinancementService} from '../../../../../shared/services/type-source-financement.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListTypeSourceFinancementResponse} from '../../../../../models/typeSourceFi.model';

@Component({
  selector: 'app-type-source-loader',
  templateUrl: './type-source-loader.component.html',
  styleUrls: ['./type-source-loader.component.css']
})
export class TypeSourceLoaderComponent implements OnInit {

  constructor(private typeSourceFiService: TypeSourceFinancementService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.typeSourceFiService.getTypeSourceFinancementList().subscribe((res: ListTypeSourceFinancementResponse) => {
      this.dataService.setTypeSourceFis(res.data);
    }, (error) => {
    }, () => {
      this.router.navigate(['/dashboard/financement/type/source']);
    });
  }

}
