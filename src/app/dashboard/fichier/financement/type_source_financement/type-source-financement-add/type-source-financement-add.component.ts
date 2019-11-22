import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {TypeSourceFinancementService} from '../../../../../shared/services/type-source-financement.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../../../../shared/services/utils.service';

@Component({
  selector: 'app-type-source-financement-add',
  templateUrl: './type-source-financement-add.component.html',
  styleUrls: ['./type-source-financement-add.component.css']
})
export class TypeSourceFinancementAddComponent implements OnInit {

  message: string;
  constructor(private typeService: TypeSourceFinancementService, private router: Router, private utils: UtilsService) { }

  ngOnInit() {
    this.message = '';
  }
  onSubmit(form: NgForm) {


      this.typeService.createTypeSource(form.value['code_type__source_financement'], form.value['libelle_type__source_financement'])
        .subscribe((resp) => {
          this.utils.notifAjout_OK();
          this.router.navigate(['/dashboard/fichier/financement/type/source/load']);
        } , (error: ErrorResponse) => {
          console.log(error);
        console.log(error.error['error']);
        this.utils.notifAjout_Error();
          this.router.navigate(['/dashboard/fichier/financement/type/source/add']);
        });
  }
}
