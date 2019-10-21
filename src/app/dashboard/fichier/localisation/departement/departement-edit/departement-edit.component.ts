import { Component, OnInit } from '@angular/core';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Departement, DepartementResponse} from '../../../../../models/departement.model';
import {UtilsService} from '../../../../../shared/services/utils.service';

@Component({
  selector: 'app-departement-edit',
  templateUrl: './departement-edit.component.html',
  styleUrls: ['./departement-edit.component.css']
})
export class DepartementEditComponent implements OnInit {
  departement: Departement;
  id: number;
  message: string;
  constructor(private departementService: DepartementService , private router: Router, private route: ActivatedRoute, private utils: UtilsService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.departementService.getDepartemen(this.id).subscribe((res: DepartementResponse) => {
      this.departement = res.data;
    });
  }
  onSubmit(form: NgForm) {
    this.departementService.update(form.value['code_département'], form.value['nom_département'], this.id).subscribe((res) => {
        console.log(res);
        // this.message = 'Succes de l\'operation';
        this.utils.notifModif_OK();
        this.router.navigate(['/dashboard/fichier/localisation/departement/load']);
      }, (error: ErrorResponse) => {
      console.log(error);
        console.log(error.error['error']);
        this.utils.notifModif_Error(error.error['error']);
        // tslint:disable-next-line:forin
        // for (const key in error.error['error']) {
        //     console.log(key);
        //     if (key !== 'error') {
        //       console.log(error.error['error'][key]);
        //     this.message = error.error['error'][key];
        //     break;
        //     }
        // }
        this.router.navigate(['/dashboard/fichier/localisation/departement/edit/' + this.id]);
      },
      () => {

      }
    );
  }
}
