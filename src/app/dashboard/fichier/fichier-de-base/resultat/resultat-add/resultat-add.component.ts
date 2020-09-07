import { Component, OnInit } from '@angular/core';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {ListProgrammeResponse} from '../../../../../models/programme.model';
import {NgForm} from '@angular/forms';
import {ResultatService} from '../../../../../shared/services/resultat.service';
import {ListObjectifResponse} from '../../../../../models/objectif.model';

@Component({
  selector: 'app-resultat-add',
  templateUrl: './resultat-add.component.html',
  styleUrls: ['./resultat-add.component.css']
})
export class ResultatAddComponent implements OnInit {

  singleSelectOptions: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = ['reactjs'];
  constructor(private resultService: ResultatService, private router: Router, private utils: UtilsService, private objService: ObjectifService) { }

  ngOnInit() {
    this.message = '';
    this.objService.getObjectifList()
      .subscribe((res: ListObjectifResponse) => {
        res.data.map((resultat) => {
          this.singleSelectOptions.push({
            label: resultat.denomination,
            value: resultat.id.toString(),
            code: resultat.code
          });
        });
      });
  }
  onSubmit(form: NgForm) {this.resultService.createResultat(form.value['code_resultat'], form.value['libelle_resultat'], +this.singleSelectValue).subscribe((resp) => {
    this.utils.notifAjout_OK();
    this.router.navigate(['/dashboard/fichier/base/resultat/load']);
  } , (error: ErrorResponse) => {
        console.log(error.error['error']);
        this.utils.notifAjout_Error();
    this.router.navigate(['/dashboard/fichier/base/resultat/add']);
  });
  }

}
