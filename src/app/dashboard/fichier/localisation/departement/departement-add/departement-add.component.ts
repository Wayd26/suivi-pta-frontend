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

  constructor(private departeemntService: DepartementService , private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
      this.departeemntService.createDepartement(form.value['nom_département']).subscribe((res) => {
        console.log(res);
          this.router.navigate(['/dashboard/fichier/localisation/departement']);
      }, (error) => {},
        () => {

        }
      );
  }

}

