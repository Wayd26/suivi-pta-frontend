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
        this.utils.notifAjout_OK();
          this.router.navigate(['/dashboard/fichier/localisation/departement/load']);
      }, (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utils.notifAjout_Error();
        this.router.navigate(['/dashboard/fichier/localisation/departement/add']);
        },
        () => {

        }
      );
  }

}

