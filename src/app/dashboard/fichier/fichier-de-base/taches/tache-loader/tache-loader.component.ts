import { Component, OnInit } from '@angular/core';
import {TacheService} from '../../../../../shared/services/tache.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListTacheResponse} from '../../../../../models/tache.model';

@Component({
  selector: 'app-tache-loader',
  templateUrl: './tache-loader.component.html',
  styleUrls: ['./tache-loader.component.css']
})
export class TacheLoaderComponent implements OnInit {

  constructor(private tacheService: TacheService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.tacheService.getTacheList().subscribe((res: ListTacheResponse) => {
      this.dataService.setTaches(res.data);
    } , (error) => {
    }, () => {
      this.router.navigate(['/dashboard/fichier/base/tache']);
    });
  }

}
