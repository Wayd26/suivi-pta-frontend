import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProgrammeResponse} from '../../../../../models/programme.model';
import {ListExerciceResponse} from '../../../../../models/exercice.model';
import {NgForm} from '@angular/forms';
import {SourceFinancement, SourceFiResponse} from '../../../../../models/sourceFi.model';
import {ListTypeSourceFinancementResponse, TypeSourceFinancement} from '../../../../../models/typeSourceFi.model';
import {SourceFinancementService} from '../../../../../shared/services/source-financement.service';
import {TypeSourceFinancementService} from '../../../../../shared/services/type-source-financement.service';

@Component({
  selector: 'app-type-source-financement-edit',
  templateUrl: './type-source-financement-edit.component.html',
  styleUrls: ['./type-source-financement-edit.component.css']
})
export class TypeSourceFinancementEditComponent implements OnInit {
  singleSelectOptions: any = [];
  message: string;
  singleSelectValue: string[] = [];
  typeSourceFi: TypeSourceFinancement;
  id: number;

  constructor(private  typeSourceFiService: TypeSourceFinancementService,
     private utilService: UtilsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.typeSourceFiService.getTypeSourceFinancement(+this.route.snapshot.params['id']).subscribe((res: SourceFiResponse) => {
      this.typeSourceFi = res.data;
    });
  }
  onSubmit(form: NgForm) {

    console.log('le code est : ' + form.value['code']);

    this.typeSourceFiService.update(form.value['code'], form.value['libelle_type__source_financement'], this.id)
      .subscribe((resp) => {
        // this.message = 'Succes de l\'operation';
        this.utilService.notifModif_OK();
        this.router.navigate(['/dashboard/fichier/financement/type/source/load']);
      } , (error: ErrorResponse) => {

        console.log(error);
        console.log(error.error['error']);
        this.utilService.notifModif_Error();
        this.router.navigate(['//dashboard/fichier/financement/type_source_financement/edit/' + this.id]);
      });
  }

}
