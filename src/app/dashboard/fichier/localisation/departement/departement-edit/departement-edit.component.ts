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
  constructor(private departeemntService: DepartementService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.departeemntService.getDepartemen(this.id).subscribe((res: DepartementResponse) => {
      this.departement = res.data;
    });
  }
  onSubmit(form: NgForm) {
    this.departeemntService.update(form.value['nom_département'], this.id).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/dashboard/fichier/localisation/departement']);
      }, (error) => {
      },
      () => {

      }
    );
  }
}
