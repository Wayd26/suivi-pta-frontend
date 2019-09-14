import { Component, OnInit } from '@angular/core';
import {SourceFinancementService} from '../../../../../shared/services/source-financement.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {TypeSourceFinancementService} from '../../../../../shared/services/type-source-financement.service';
import {ListTypeSourceFinancementResponse} from '../../../../../models/typeSourceFi.model';
import {NgForm} from '@angular/forms';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {ListProgrammeResponse} from '../../../../../models/programme.model';

@Component({
  selector: 'app-objectif-add',
  templateUrl: './objectif-add.component.html',
  styleUrls: ['./objectif-add.component.css']
})
export class ObjectifAddComponent implements OnInit {
  singleSelectOptions: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = ['reactjs'];
  constructor(private objService: ObjectifService, private router: Router, private utils: UtilsService, private progra: ProgrammeService) { }

  ngOnInit() {
    this.message = '';
      this.progra.getProgrammeList()
      .subscribe((res: ListProgrammeResponse) => {
        res.data.map((programme) => {
          this.singleSelectOptions.push({
            label: programme.libelle,
            value: programme.identifiant,
            code: programme.code
          });
        });
      });
  }
  onSubmit(form: NgForm) {this.objService.createObjectif(form.value['code_objectif_specifique'], form.value['libelle_objectif_specifique'], +this.singleSelectValue).subscribe((resp) => {
    this.message = 'Succes de l\'operation';
    this.router.navigate(['/dashboard/fichier/base/objectif/load']);
      } , (error) => {
        console.log(error);
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/objectif/add']);
      });
  }

}
