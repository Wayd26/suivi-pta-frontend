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

  singleSelectValue: string[] = ['reactjs'];
  constructor(private sourcrService: SourceFinancementService, private router: Router, private utils: UtilsService, private typeSource: TypeSourceFinancementService) { }

  ngOnInit() {
    this.message = '';
    this.typeSource.getTypeSourceFinancementList()
      .subscribe((res: ListTypeSourceFinancementResponse) => {
        res.data.map((type) => {
          this.singleSelectOptions.push({
            label: type.libelle,
            value: type.identifiant,
            code: type.identifiant
          });
        });
      });
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
      this.sourcrService.createSource(form.value['libellé_source_financement'], form.value['poids_projet_pip'], form.value['toggle1'], +this.singleSelectValue)
        .subscribe((resp) => {
          this.router.navigate(['/dashboard/fichier/financement/source']);
        } , (error) => {
          console.log(error);
          this.message = 'Echec de l\'operation';
          this.router.navigate(['/dashboard/fichier/financement/source/add']);
        });
  }

}
