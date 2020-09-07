import { Component, OnInit } from '@angular/core';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListObjectifResponse} from '../../../../../models/objectif.model';

@Component({
  selector: 'app-objectif-loader',
  templateUrl: './objectif-loader.component.html',
  styleUrls: ['./objectif-loader.component.css']
})
export class ObjectifLoaderComponent implements OnInit {

  constructor(private objectifService: ObjectifService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.objectifService.getObjectifList().subscribe((res: ListObjectifResponse) => {
      this.dataService.setObjectifs(res.data);
    }, (error) => {
    }, () => {
      this.router.navigate(['/dashboard/fichier/base/objectif']);
    });
  }

}
