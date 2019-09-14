import { Component, OnInit } from '@angular/core';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Departement, DepartementResponse} from '../../../../../models/departement.model';

@Component({
  selector: 'app-departement-edit',
  templateUrl: './departement-edit.component.html',
  styleUrls: ['./departement-edit.component.css']
})
export class DepartementEditComponent implements OnInit {
  departement: Departement;
  id: number;
  message: string;
  constructor(private departementService: DepartementService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.departementService.getDepartemen(this.id).subscribe((res: DepartementResponse) => {
      this.departement = res.data;
    });
  }
  onSubmit(form: NgForm) {
    this.departementService.update(form.value['code_département'], form.value['nom_département'], this.id).subscribe((res) => {
        console.log(res);
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/fichier/localisation/departement/load']);
      }, (error) => {
        console.log(error);
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/fichier/localisation/departement/edit/' + this.id]);
      },
      () => {

      }
    );
  }
}
