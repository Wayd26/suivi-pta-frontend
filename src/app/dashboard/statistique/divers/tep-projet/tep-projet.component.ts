import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from '../../../../shared/services/programme.service';
import {ListProgrammeResponse} from '../../../../models/programme.model';

@Component({
  selector: 'app-tep-projet',
  templateUrl: './tep-projet.component.html',
  styleUrls: ['./tep-projet.component.css']
})
export class TepProjetComponent implements OnInit {
  model2;
  singleSelectOptionsProgramme: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValueProgramme: string[] = [''];
  constructor(private programmeService: ProgrammeService) { }

  ngOnInit() {
    this.message = '';
    this.programmeService.getProgrammeList()
      .subscribe((res: ListProgrammeResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptionsProgramme.push({
            label: exo.libelle,
            value: exo.identifiant,
            code: exo.identifiant
          });
        });
      });
  }

}
