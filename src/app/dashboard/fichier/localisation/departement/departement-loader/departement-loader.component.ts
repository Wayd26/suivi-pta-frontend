import { Component, OnInit } from '@angular/core';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ListDepartementResponse} from '../../../../../models/departement.model';

@Component({
  selector: 'app-departement-loader',
  templateUrl: './departement-loader.component.html',
  styleUrls: ['./departement-loader.component.css']
})
export class DepartementLoaderComponent implements OnInit {

  constructor(private departementService: DepartementService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.departementService.getDepartementList().subscribe((res: ListDepartementResponse) => {
      this.dataService.setDepartements(res.data);
    } , (error) => {
    }, () => {
      this.router.navigate(['/dashboard/fichier/localisation/departement']);
    });
  }

}
