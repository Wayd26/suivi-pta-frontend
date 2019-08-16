import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from 'src/app/shared/services/programme.service';
import { Programme, ListProgrammeResponse } from 'src/app/models/programme.model';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-programme-list',
  templateUrl: './programme-list.component.html',
  styleUrls: ['./programme-list.component.css']
})
export class ProgrammeListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  programmes: Programme[];
  constructor(private programmeService: ProgrammeService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '500',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };
    this.programmes = this.dataService.getProgrammes();
      this.programmeService.getProgrammeList().subscribe((res: ListProgrammeResponse) => {
       this.dataService.setProgrammes(res.data) ;
      }, (error) => {}, () => {
        //this.programmes = this.dataService.getProgrammes();
    });
      console.log(this.dataService.getProgrammes());
  }

  onDelete(id) {
    const response = confirm(DELETE_CONFIRMATION);
   if (response) {
     this.programmeService.deleteProgramme(id).subscribe((res) => {
         this.programmes = this.programmes.filter((action) => {
           return action.identifiant !== id;
         });
         this.router.navigate(['/dashboard/fichier/base/programme']);
       }
     );
   }
  }

}
