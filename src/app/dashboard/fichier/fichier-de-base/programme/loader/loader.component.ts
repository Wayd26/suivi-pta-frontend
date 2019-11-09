import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListProgrammeResponse} from '../../../../../models/programme.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private programmeService: ProgrammeService, private router: Router, private dataService: DataService) { }

  ngOnInit() {

    this.programmeService.getProgrammeList().subscribe((res: ListProgrammeResponse) => {
      this.dataService.setProgrammes(res.data) ;
    }, (error) => {
      console.log(error);
    }, () => {


      this.router.navigate(['/dashboard/fichier/base/programme']);
    });
  }

}
