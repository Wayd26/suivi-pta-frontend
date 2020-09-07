import { Component, OnInit } from '@angular/core';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ObjectifModel, ObjectifResponse} from '../../../../../models/objectif.model';
import {ListProgrammeResponse, ProgrammeResponse} from '../../../../../models/programme.model';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-objectif-edit',
  templateUrl: './objectif-edit.component.html',
  styleUrls: ['./objectif-edit.component.css']
})
export class ObjectifEditComponent implements OnInit {
  singleSelectOptions: any = [];
  message: string;
  objectif: ObjectifModel;
  id: number;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[];
  constructor(private objService: ObjectifService, private router: Router, private utils: UtilsService, private progra: ProgrammeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.objService.getObjectif(+this.route.snapshot.params['id']).subscribe((res: ObjectifResponse) => {
      this.objectif = res.data;
      console.log(res.data);

      this.singleSelectValue = [this.utils.getIdData(res.data.links, 'program')];
      console.log(this.utils.getIdData(res.data.links, 'program'));
    });

    this.progra.getProgrammeList()
      .subscribe((res: ListProgrammeResponse) => {
        res.data.map((prog) => {
          this.singleSelectOptions.push({
            label: prog.denomination,
            value: prog.id.toString(),
            code: prog.code
          });
        });
      });
  }

  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue);
    this.objService.updateObjectif(form.value['code_objectif_specifique'], form.value['libelle_objectif_specifique'], +this.singleSelectValue, this.id )
      .subscribe((resp) => {
        this.utils.notifModif_OK();
        this.router.navigate(['/dashboard/fichier/base/objectif/load']);
      } , (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utils.notifModif_Error();
        this.router.navigate(['/dashboard/fichier/base/objectif/edit/' + this.id ]);
      });
  }


}
