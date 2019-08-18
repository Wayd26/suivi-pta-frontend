import { Component, OnInit } from '@angular/core';
import {MinistereService} from '../../../../../shared/services/ministere.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListMinistereResponse} from '../../../../../models/ministere.model';

@Component({
  selector: 'app-ministere-loader',
  templateUrl: './ministere-loader.component.html',
  styleUrls: ['./ministere-loader.component.css']
})
export class MinistereLoaderComponent implements OnInit {

  constructor(private ministereService: MinistereService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.ministereService.getMinistereList().subscribe((res: ListMinistereResponse) => {
      this.dataService.setMinisteres(res.data);
    }, (error) => {
    }, () => {
      this.router.navigate(['/dashboard/fichier/base/ministere']);
    });
  }

}
