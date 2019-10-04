import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from '../../../../shared/services/programme.service';
import {UtilsService} from '../../../../shared/services/utils.service';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Programme, ProgrammeResponse} from '../../../../models/programme.model';
import {ListExerciceResponse} from '../../../../models/exercice.model';
import {NgForm} from '@angular/forms';
import {SourceFinancementService} from '../../../../shared/services/source-financement.service';
import {TypeSourceFinancementService} from '../../../../shared/services/type-source-financement.service';
import {SourceFinancement, SourceFiResponse} from '../../../../models/sourceFi.model';
import {ListTypeSourceFinancementResponse} from '../../../../models/typeSourceFi.model';

@Component({
  selector: 'app-source-financement-edit',
  templateUrl: './source-financement-edit.component.html',
  styleUrls: ['./source-financement-edit.component.css']
})
export class SourceFinancementEditComponent implements OnInit {
  singleSelectOptions: any = [];
  message: string;
  singleSelectValue: string[] = [];
  sourceFi: SourceFinancement;
  id: number;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['value']}
  constructor(private  sourceFiService: SourceFinancementService, private utilService: UtilsService,
    private typeSourceService: TypeSourceFinancementService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.sourceFiService.getSourceFinancement(+this.route.snapshot.params['id']).subscribe((res: SourceFiResponse) => {
      this.sourceFi = res.data;

      console.log(res.data);

      //this.singleSelectValue = [this.sourceFi._type];
      this.singleSelectValue = [this.utilService.getIdData(res.data.links, 'type')];
      console.log(this.utilService.getIdData(res.data.links, 'type_Source'));
    });


    this.typeSourceService.getTypeSourceFinancementList()
      .subscribe((res: ListTypeSourceFinancementResponse) => {
        res.data.map((typeS) => {
          this.singleSelectOptions.push({
            label: typeS.libelle,
            value: typeS.identifiant,
            code: typeS.identifiant
          });
        });
      });
  }
  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue);
    this.sourceFiService.update(form.value['code_source_financement'], form.value['libellé_source_financement'],
    form.value['poids_projet_pip'], form.value['chapitre_imputation'], form.value['toggle1'], +this.singleSelectValue, this.id)
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/fichier/financement/load']);
      } , (error) => {
        console.log(error);
        this.message = 'Echec de l\'operation';
        this.router.navigate(['//dashboard/fichier/financement/edit/' + this.id]);
      });
  }

}
