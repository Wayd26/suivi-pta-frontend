import { Component, OnInit } from '@angular/core';
import {VilleService} from '../../../../../shared/services/ville.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListVilleResponse} from '../../../../../models/ville.model';

@Component({
  selector: 'app-ville-loader',
  templateUrl: './ville-loader.component.html',
  styleUrls: ['./ville-loader.component.css']
})
export class VilleLoaderComponent implements OnInit {

  constructor(private villeService: VilleService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.villeService.getVilleList().subscribe((res: ListVilleResponse) => {
      this.dataService.setVilles(res.data);
    } , (error) => {
    }, () => {
      this.router.navigate(['/dashboard/fichier/localisation/ville']);
    });
  }

}
