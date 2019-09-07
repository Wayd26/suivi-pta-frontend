import { Component, OnInit } from '@angular/core';
import {VilleService} from '../../../../shared/services/ville.service';
import {DepartementService} from '../../../../shared/services/departement.service';
import {ListExerciceResponse} from '../../../../models/exercice.model';
import {ListVilleResponse, Ville} from '../../../../models/ville.model';
import {Departement, ListDepartementResponse} from '../../../../models/departement.model';

@Component({
  selector: 'app-activite-localisation',
  templateUrl: './activite-localisation.component.html',
  styleUrls: ['./activite-localisation.component.css']
})
export class ActiviteLocalisationComponent implements OnInit {

  singleSelectOptionsDepartement: any = [];
  singleSelectOptionsVille: any = [];
  message: string;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValueDepartement: string[] = ['reactjs'];
  singleSelectValueVille: string[] = ['reactjs'];
  villes: Ville[];
  dep: Departement[];
  constructor( private villeService: VilleService, private departementService: DepartementService) { }

  ngOnInit() {
    this.message = '';
    this.departementService.getDepartementList()
      .subscribe((res: ListDepartementResponse) => {
        this.dep = res.data;
        res.data.map((exo) => {
          this.singleSelectOptionsDepartement.push({
            label: exo.denomination,
            value: exo.identifiant,
            code: exo.identifiant
          });
        });
      });
    this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        this.villes = res.data;
      });
  }
  onSelectDepartement () {
    this.villes.filter((ville) => {
      return ville._departement === this.dep.find((d) => d.identifiant === +this.singleSelectValueDepartement).denomination;
    }).map((exo) => {
      this.singleSelectOptionsVille.push({
        label: exo.denomination,
        value: exo.identifiant,
        code: exo.identifiant
      });
    });
  }

}
