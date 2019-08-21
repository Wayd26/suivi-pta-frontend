import { Component, OnInit } from '@angular/core';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ObjectifModel, ObjectifResponse} from '../../../../../models/objectif.model';
import {ListProgrammeResponse, ProgrammeResponse} from '../../../../../models/programme.model';
import {ProgrammeService} from '../../../../../shared/services/programme.service';


@Component({
  selector: 'app-objectif-edit',
  templateUrl: './objectif-edit.component.html',
  styleUrls: ['./objectif-edit.component.css']
})
export class ObjectifEditComponent implements OnInit { singleSelectOptions: any = [];
  message: string;
  objectif: ObjectifModel;
  id: number;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValue: string[] = ['reactjs'];
  constructor(private objService: ObjectifService, private router: Router, private utils: UtilsService, private progra: ProgrammeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.objService.getObjectif(+this.route.snapshot.params['id']).subscribe((res: ObjectifResponse) => {
      this.objectif = res.data;

      this.singleSelectValue = [this.objectif.libelle];
      console.log(this.utils.getIdData(res.data.links, 'libelle_Objectif'));
    });

    this.progra.getProgrammeList()
      .subscribe((res: ListProgrammeResponse) => {
        res.data.map((objectif) => {
          this.singleSelectOptions.push({
            label: objectif.libelle,
            value: objectif.identifiant,
            code: objectif.code
          });
        });
      });
  }

}
