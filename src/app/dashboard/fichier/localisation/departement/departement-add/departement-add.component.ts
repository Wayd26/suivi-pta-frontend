import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ville-add',
  templateUrl: './departement-add.component.html',
  styleUrls: ['./departement-add.component.css']
})
export class DepartementAddComponent implements OnInit {
  id: number;
  message: string;
  constructor(private departeemntService: DepartementService , private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
      this.departeemntService.createDepartement(form.value['code_département'], form.value['nom_département']).subscribe((res) => {
        console.log(res);
          this.message = 'Succes de l\'operation';
          this.router.navigate(['/dashboard/fichier/localisation/departement/load']);
      }, (error) => {
          this.message = 'Echec de l\'operation';
          this.router.navigate(['/dashboard/fichier/localisation/departement/add']);
        },
        () => {

        }
      );
  }

}

