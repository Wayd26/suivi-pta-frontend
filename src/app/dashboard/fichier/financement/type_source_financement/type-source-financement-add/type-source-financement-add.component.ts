import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {TypeSourceFinancementService} from '../../../../../shared/services/type-source-financement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-type-source-financement-add',
  templateUrl: './type-source-financement-add.component.html',
  styleUrls: ['./type-source-financement-add.component.css']
})
export class TypeSourceFinancementAddComponent implements OnInit {

  message: string;
  constructor(private typeService: TypeSourceFinancementService, private router: Router) { }

  ngOnInit() {
    this.message = '';
  }
  onSubmit(form: NgForm) {


      this.typeService.createTypeSource(form.value['code_type__source_financement'], form.value['libelle_type__source_financement'])
        .subscribe((resp) => {
          this.router.navigate(['/dashboard/fichier/financement/type/source/load']);
        } , (error: ErrorResponse) => {
        console.log(error.error['error']);
        // tslint:disable-next-line:forin
        for (const key in error.error['error']) {
            console.log(key);
            if (key !== 'error') {
              console.log(error.error['error'][key]);
            this.message = error.error['error'][key];
            break;
            }
        }
          this.router.navigate(['/dashboard/fichier/financement/type/source/add']);
        });
  }
}
