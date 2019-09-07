import { Component, OnInit } from '@angular/core';
import {DepartementService} from '../../../../shared/services/departement.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../shared/services/data.service';
import {ListDepartementResponse} from '../../../../models/departement.model';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {ListExerciceResponse} from '../../../../models/exercice.model';

@Component({
  selector: 'app-exercice-loader',
  templateUrl: './exercice-loader.component.html',
  styleUrls: ['./exercice-loader.component.css']
})
export class ExerciceLoaderComponent implements OnInit {

  constructor(private execiceService: ExercieService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.execiceService.getExerciceList().subscribe((res: ListExerciceResponse) => {
      this.dataService.setExercices(res.data);
    } , (error) => {
    }, () => {
      this.router.navigate(['/dashboard/parametres/exercices']);
    });
  }

}

