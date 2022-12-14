import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ProgrammeService} from '../../../../../shared/services/programme.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ListExerciceResponse} from '../../../../../models/exercice.model';
import {Programme, ProgrammeResponse} from '../../../../../models/programme.model';

@Component({
  selector: 'app-programme-edit',
  templateUrl: './programme-edit.component.html',
  styleUrls: ['./programme-edit.component.css']
})
export class ProgrammeEditComponent implements OnInit {

  singleSelectOptions: any = [];
  message: string;
  singleSelectValue: string[] = [];
  programme: Programme;
  id: number;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['value']
  };
  constructor(private  programmeService: ProgrammeService, private utilService: UtilsService, private exerciceService: ExercieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.programmeService.getProgramme(+this.route.snapshot.params['id']).subscribe((res: ProgrammeResponse) => {
      this.programme = res.data;

      this.singleSelectValue = [this.utilService.getIdData(res.data.links, 'exercice')];
      console.log(this.utilService.getIdData(res.data.links, 'exercice'));
    });


    this.exerciceService.getExerciceList()
      .subscribe((res: ListExerciceResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptions.push({
            label: exo.denomination,
            value: exo.id.toString(),
            code: exo.id
          });
        });
      });
  }
  onSubmit(form: NgForm) {
    console.log(this.singleSelectValue);
    this.programmeService.update(form.value['code'], form.value['libelle'], form.value['poids'], +this.singleSelectValue, this.id )
      .subscribe((resp) => {
        // this.message = 'Succes de l\'operation';
        this.utilService.notifModif_OK();
        this.router.navigate(['/dashboard/fichier/base/programmes/load']);
      } , (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utilService.notifModif_Error(error.error['error']);
        // tslint:disable-next-line:forin
        // for (const key in error.error['error']) {
        //     console.log(key);
        //     if (key !== 'error') {
        //       console.log(error.error['error'][key]);
        //     this.message = error.error['error'][key];
        //     break;
        //     }
        // }
        this.router.navigate(['/dashboard/fichier/base/programmes/edit/' + this.id ]);
      });
  }

}
