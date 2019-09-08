import { Component, OnInit } from '@angular/core';
import {StructureService} from '../../../../shared/services/structure.service';
import {ListStructureResponse} from '../../../../models/structure.model';

@Component({
  selector: 'app-synthese',
  templateUrl: './synthese.component.html',
  styleUrls: ['./synthese.component.css']
})
export class SyntheseComponent implements OnInit {
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
            value: exo.identifiant,
            code: exo.identifiant
          });
        });
      });
  }

}
