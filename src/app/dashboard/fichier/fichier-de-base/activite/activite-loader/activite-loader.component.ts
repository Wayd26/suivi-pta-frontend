import { Component, OnInit } from '@angular/core';
import {ActiviteService} from '../../../../../shared/services/activite.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListActiviteResponse} from '../../../../../models/activite.model';

@Component({
  selector: 'app-activite-loader',
  templateUrl: './activite-loader.component.html',
  styleUrls: ['./activite-loader.component.css']
})
export class ActiviteLoaderComponent implements OnInit {

  constructor(private activiteService: ActiviteService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.activiteService.getActiviteList().subscribe((res: ListActiviteResponse) => {
      this.dataService.setActivites(res.data);
      console.log(res.data);
    } , (error) => {
      this.dataService.setActivites([]);
    }, () => {
      this.router.navigate(['/dashboard/fichier/base/activite']);
    });
  }

}
