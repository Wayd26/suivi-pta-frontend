import { Component, OnInit } from '@angular/core';
import {ExercieService} from '../../../../shared/services/exercie.service';
import {ListExerciceResponse} from '../../../../models/exercice.model';
import {StructureService} from '../../../../shared/services/structure.service';
import {ListStructureResponse} from '../../../../models/structure.model';
import {ActiviteService} from '../../../../shared/services/activite.service';
import {ListActiviteResponse} from '../../../../models/activite.model';

@Component({
  selector: 'app-indicateur-activite',
  templateUrl: './indicateur-activite.component.html',
  styleUrls: ['./indicateur-activite.component.css']
})
export class IndicateurActiviteComponent implements OnInit {
  singleSelectOptionsExercice: any = [];
  singleSelectOptionsStructure: any = [];
  singleSelectOptionsActivite: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValueExercice: string[] = ['reactjs'];
  singleSelectValueStructure: string[] = ['reactjs'];
  singleSelectValueActivite: string[] = ['reactjs'];
  constructor(private exerciceService: ExercieService, private structureService: StructureService, private activiteService: ActiviteService) { }

  ngOnInit() {
    this.message = '';
    this.exerciceService.getExerciceList()
      .subscribe((res: ListExerciceResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptionsExercice.push({
            label: exo.denomination,
            value: exo.identifiant,
            code: exo.identifiant
          });
        });
      });
    this.structureService.getStructureList()
      .subscribe((res: ListStructureResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptionsStructure.push({
            label: exo.denomination,
            value: exo.identifiant,
            code: exo.identifiant
          });
        });
      });
    this.activiteService.getActiviteList()
      .subscribe((res: ListActiviteResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptionsActivite.push({
            label: exo.libelle,
            value: exo.identifiant,
            code: exo.identifiant
          });
        });
      });
  }

}
