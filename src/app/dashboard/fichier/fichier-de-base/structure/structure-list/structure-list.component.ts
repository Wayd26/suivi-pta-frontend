import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StructureService } from 'src/app/shared/services/structure.service';
import { Structure, ListStructureResponse } from 'src/app/models/structure.model';
import {DataService} from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.css']
})
export class StructureListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  structures: Structure[];

  constructor(private structureService: StructureService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };
    this.structures = this.dataService.getStructures();
      this.structureService.getStructureList().subscribe((res: ListStructureResponse) => {
        this.dataService.setStructures(res.data);
      }, (erro) => {
        this.structures = [];
      }, () => {}
       );
  }

  onDelete(id) {
    this.structureService.deleteStructure(id).subscribe((res) => {
        this.structures = this.structures.filter((action) => {
          return action.identifiant !== id;
        });
        this.router.navigate(['/dashboard/fichier/base/programme']);
      }
    );
  }

}
