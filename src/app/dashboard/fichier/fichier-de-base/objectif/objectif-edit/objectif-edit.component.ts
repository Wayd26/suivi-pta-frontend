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
      console.log(this.objectif);

      this.singleSelectValue = [this.utils.getIdData(res.data.links, 'programme')];
      console.log(this.utils.getIdData(res.data.links, 'programme'));
    });

    this.progra.getProgrammeList()
      .subscribe((res: ListProgrammeResponse) => {
        res.data.map((objectif) => {
          this.singleSelectOptions.push({
            label: objectif.libelle,
            value: objectif.identifiant.toString(),
            code: objectif.code
          });
        });
      });
  }

  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue);
    this.objService.updateObjectif(form.value['code_objectif_specifique'], form.value['libelle_objectif_specifique'], +this.singleSelectValue, this.id )
      .subscribe((resp) => {
        this.message = 'Succes de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/objectif/load']);
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
        this.router.navigate(['/dashboard/fichier/base/objectif/edit/' + this.id ]);
      });
  }


}
