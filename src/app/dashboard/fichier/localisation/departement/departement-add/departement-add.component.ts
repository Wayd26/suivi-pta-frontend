import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../../../../shared/services/utils.service';

@Component({
  selector: 'app-ville-add',
  templateUrl: './departement-add.component.html',
  styleUrls: ['./departement-add.component.css']
})
export class DepartementAddComponent implements OnInit {
  id: number;
  message: string;
  constructor(private departeemntService: DepartementService , private router: Router, private utils: UtilsService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
      this.departeemntService.createDepartement(form.value['code_département'], form.value['nom_département']).subscribe((res) => {
        console.log(res);
          // this.message = 'Succes de l\'operation';
        this.utils.notifAjout_OK();
          this.router.navigate(['/dashboard/fichier/localisation/departement/load']);
      }, (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utils.notifAjout_Error(error.error['error']);
        // tslint:disable-next-line:forin
        // for (const key in error.error['error']) {
        //     console.log(key);
        //     if (key !== 'error') {
        //       console.log(error.error['error'][key]);
        //     this.message = error.error['error'][key];
        //     break;
        //     }
        // }
          this.router.navigate(['/dashboard/fichier/localisation/departement/add']);
        },
        () => {

        }
      );
  }

}

