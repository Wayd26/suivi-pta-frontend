import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SourceFinancementService} from '../../../../shared/services/source-financement.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../../../shared/services/utils.service';
import {TypeSourceFinancementService} from '../../../../shared/services/type-source-financement.service';
import {ListTypeSourceFinancementResponse} from '../../../../models/typeSourceFi.model';

@Component({
  selector: 'app-source-financement-add',
  templateUrl: './source-financement-add.component.html',
  styleUrls: ['./source-financement-add.component.css']
})
export class SourceFinancementAddComponent implements OnInit {

  singleSelectOptions: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = [];
  constructor(private sourcrService: SourceFinancementService, private router: Router, private utils: UtilsService, private typeSource: TypeSourceFinancementService) { }

  ngOnInit() {
    this.message = '';
    this.typeSource.getTypeSourceFinancementList()
      .subscribe((res: ListTypeSourceFinancementResponse) => {
        res.data.map((type) => {
          this.singleSelectOptions.push({
            label: type.denomination,
            value: type.id,
            code: type.code
          });
        });
      });
  }
  onSubmit(form: NgForm) {


    console.log('code : ' + form.value['code_source_financement']);
    console.log('denomination : ' + form.value['libellé_source_financement']);
    console.log('poids : ' + form.value['poids_projet_pip']);
    console.log('chapitre : ' +  form.value['chapitre_imputation']);
    console.log('Est_projet : ' + form.value['toggle1']);
    console.log('typeSF : ' + this.singleSelectValue);

    console.log(this.singleSelectValue[0]);
    this.sourcrService.createSource(form.value['chapitre_imputation'], form.value['code_source_financement'], form.value['toggle1'], form.value['libellé_source_financement'], form.value['poids_projet_pip'], +this.singleSelectValue)
        .subscribe((resp) => {
          this.utils.notifAjout_OK();
          this.router.navigate(['/dashboard/fichier/financement/source/load']);
        } , (error: ErrorResponse) => {
          console.log(error);
        console.log(error.error['error']);
        this.utils.notifAjout_Error();
        this.router.navigate(['/dashboard/fichier/financement/source/add']);
        });
  }

}
