import { Component, OnInit } from '@angular/core';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {StructureService} from '../../../../shared/services/structure.service';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {ListExerciceResponse} from '../../../../models/exercice.model';
import {ListStructureResponse} from '../../../../models/structure.model';

@Component({
  selector: 'app-tache-par-periode',
  templateUrl: './tache-par-periode.component.html',
  styleUrls: ['./tache-par-periode.component.css']
})
export class TacheParPeriodeComponent implements OnInit {
  model2;
  singleSelectOptionsStructure: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValueStructure: string[] = [''];
  constructor(private structureService: StructureService) { }

  ngOnInit() {
    this.message = '';
    this.structureService.getStructureList()
      .subscribe((res: ListStructureResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptionsStructure.push({
            label: exo.denomination,
            value: exo.id,
            code: exo.code
          });
        });
      });
  }

}
