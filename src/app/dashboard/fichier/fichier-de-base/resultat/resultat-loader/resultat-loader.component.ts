import { Component, OnInit } from '@angular/core';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListObjectifResponse} from '../../../../../models/objectif.model';
import {ResultatService} from '../../../../../shared/services/resultat.service';
import {ListeResultatResponse} from '../../../../../models/resultat.model';

@Component({
  selector: 'app-resultat-loader',
  templateUrl: './resultat-loader.component.html',
  styleUrls: ['./resultat-loader.component.css']
})
export class ResultatLoaderComponent implements OnInit {

  constructor(private resultatService: ResultatService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.resultatService.getResultatList().subscribe((res: ListeResultatResponse) => {
      this.dataService.setResultats(res.data);
    }, (error) => {
    }, () => {
      this.router.navigate(['/dashboard/fichier/base/resultat']);
    });
  }
}


