import { Component, OnInit } from '@angular/core';
import {StructureService} from '../../../../../shared/services/structure.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListStructureResponse} from '../../../../../models/structure.model';

@Component({
  selector: 'app-structure-loader',
  templateUrl: './structure-loader.component.html',
  styleUrls: ['./structure-loader.component.css']
})
export class StructureLoaderComponent implements OnInit {

  constructor(private structureService: StructureService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.structureService.getStructureList().subscribe((res: ListStructureResponse) => {
      this.dataService.setStructures(res.data);
    }, (erro) => {
    }, () => {
      this.router.navigate(['/dashboard/fichier/base/programme']);    } );
  }

}
