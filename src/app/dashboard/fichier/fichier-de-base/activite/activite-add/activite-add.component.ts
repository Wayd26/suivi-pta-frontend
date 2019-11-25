import { Component, OnInit } from '@angular/core';
import {Structure, ListStructureResponse, StructureExport} from '../../../../../models/structure.model';
import {ExercieService} from '../../../../../shared/services/exercie.service';
import { StructureService } from 'src/app/shared/services/structure.service';
import { ActionService } from 'src/app/shared/services/action.service';
import { DepartementService } from 'src/app/shared/services/departement.service';
import { VilleService } from 'src/app/shared/services/ville.service';
import { ListExerciceResponse } from 'src/app/models/exercice.model';
import { ListVilleResponse, Ville } from 'src/app/models/ville.model';
import { ListActionResponse } from 'src/app/models/action.model';
import { ListDepartementResponse } from 'src/app/models/departement.model';
import { SourceFinancement, ListSourceFinancementResponse } from 'src/app/models/sourceFi.model';
import { SourceFinancementService } from 'src/app/shared/services/source-financement.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ActiviteService } from 'src/app/shared/services/activite.service';
import { SourceFinancementActivite } from 'src/app/models/activite.model';
import {Router} from '@angular/router';
import {Indicateur, ListIndicateurResponse} from '../../../../../models/indicateur.model';
import {IndicateurService} from '../../../../../shared/services/indicateur.service';
import {SousActionService} from '../../../../../shared/services/sous-action.service';

@Component({
  selector: 'app-activite-add',
  templateUrl: './activite-add.component.html',
  styleUrls: ['./activite-add.component.scss']
})
export class ActiviteAddComponent implements OnInit {
  public isCompleted: any;
  public onStep2Next: any;
  public onStep3Next: any;
  public onComplete: any;
  dtOptions: DataTables.Settings = {};
  model2;
  dateDebut;
  dateFin;
  code;
  libelle;
  montant;
  poids;
  mode;
  projet;
  structures: Structure[] = [];
  indicateur: Indicateur[] = [];
  sources: SourceFinancement[] = [];
  sourceFi: any = [];
  singleSelectOptionsExercice: any = [];
  singleSelectOptionsStructure: any = [];
  singleSelectOptionsTypeActivite: any = [];
  singleSelectOptionsAction: any = [];
  singleSelectOptionsDepartement: any = [];
  singleSelectOptionsVille: any = [];
  singleSelectOptionsSource: any = [];
  singleSelectOptionsIndicateur: any = [];
  structureSelect: any = [];
  sourcefiSelect: number[] = [];
  indicateurSelect: any = [];
  structureImpliSelect: any = [];
  structureSelectShow: Structure[] = [];
  sourcefiSelectShow: SourceFinancement[] = [];
  structureImpliSelectShow: Structure[] = [];
  indicateurSelectShow: Indicateur[] = [];
  montantValue = 0;
  montantSelect: number[] = [];
  villeList: Ville [] = [];

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };

  singleSelectValueExercice: string[] = ['reactjs'];
  singleSelectValueStructure: string[] = ['reactjs'];
  singleSelectValueTypeActivite: string[] = ['reactjs'];
  singleSelectValueAction: string[] = ['reactjs'];
  singleSelectValueDepartement: string[] = ['reactjs'];
  singleSelectValueVille: string[] = ['reactjs'];
  singleSelectValueStructureSuper: string[] = ['reactjs'];
  singleSelectValueStructureImpl: string[] = ['reactjs'];
  singleSelectValueSource: string[] = ['reactjs'];
  singleSelectValueIndicateur: string[] = ['reactjs'];
  message = '';
  indicateurLabel: any;
  constructor(private exerciceService: ExercieService, private structureService: StructureService, private sousActionService: SousActionService
    , private departementService: DepartementService, private villeService: VilleService,
     private sourceServices: SourceFinancementService, private utilService: UtilsService,
     private activiteService: ActiviteService, private router: Router, private indicateurService: IndicateurService) { }

  ngOnInit() {
    this.exerciceService.getExerciceList()
      .subscribe((res: ListExerciceResponse) => {
        res.data.map((exo) => {
          this.singleSelectOptionsExercice.push({
            label: exo.denomination,
            value: exo.id,
            code: exo.id
          });
        });
      });
      this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        this.villeList = res.data;
        res.data.map((ville) => {
          this.singleSelectOptionsVille.push({
            label: ville.denomination,
            value: ville.id,
            code: ville.code
          });
        });
      });
      this.structureService.getStructureListByUser()
      .subscribe((res: ListStructureResponse) => {
        this.structures = res.data;
        console.log(this.structures);
        res.data.map((ville) => {
          this.singleSelectOptionsStructure.push({
            label: ville.denomination,
            value: ville.id,
            code: ville.code
          });
          console.log(this.singleSelectOptionsStructure);
        });
      });
      this.indicateurService.getIndicateurList()
      .subscribe((res: ListIndicateurResponse) => {
        this.indicateur = res.data;
        res.data.map((ind) => {
          this.singleSelectOptionsIndicateur.push({
            label: ind.denomination,
            value: ind.id,
            code: ind.code
          });
        });
      });
      this.sousActionService.getSousActionList()
      .subscribe((res: ListActionResponse) => {
        res.data.map((ville) => {
          this.singleSelectOptionsAction.push({
            label: ville.denomination,
            value: ville.id,
            code: ville.code
          });
        });
      });
      this.departementService.getDepartementList()
      .subscribe((res: ListDepartementResponse) => {
        res.data.map((ville) => {
          this.singleSelectOptionsDepartement.push({
            label: ville.denomination,
            value: ville.id,
            code: ville.code
          });
        });
      });
      this.sourceServices.getSourceFinancementList()
      .subscribe((res: ListSourceFinancementResponse) => {
        res.data.map((source) => {
          this.singleSelectOptionsSource.push({
            label: source.denomination,
            value: source.id,
            code: source.id
          });
        });
        this.sources = res.data;
      });
  }
  getColor(data: number) {
    let result = false;
    for (let i = 0; i < this.structureSelect.length; i++) {
      if (data === this.structureSelect[i] ) {
        result = true;
        break;
      }
    }
    return result;
  }
  getColorStructureImpli(data: number) {
    let result = false;
    for (let i = 0; i < this.structureImpliSelect.length; i++) {
      if (data === this.structureImpliSelect[i] ) {
        result = true;
        break;
      }
    }
    return result;
  }
  getColorSource(data: number) {
    let result = false;
    for (let i = 0; i < this.sourcefiSelect.length; i++) {
      if (data === this.sourcefiSelect[i] ) {
        result = true;
        break;
      }
    }
    return result;
  }
  OnSelectOrUnselectAllEmploye() {
    if (this.structureSelect.length === 0) {
      for (let i = 0 ; i < this.structures.length ; i++) {
        this.structureSelect.push(this.structures[i].id);
      }
    } else if (this.structureSelect.length === this.structures.length) {
      this.structureSelect = [];
    } else if (this.structureSelect.length > 0) {
      this.structureSelect = [];
      for (let i = 0 ; i < this.structures.length ; i++) {
        this.structureSelect.push(this.structures[i].id);
      }
    }
  }
  OnSelectOrUnselectEmploye(id: number) {
    console.log(id);
    let indice = 0;
    if (this.structureSelect.length === 0) {
      this.structureSelect.push(id);
    } else if (this.structureSelect.length === 1) {
      if (this.structureSelect[0] === id) {
        this.structureSelect = this.structureSelect.filter((value) => {
          return value !== id;
        });
      } else {
        this.structureSelect.push(id);
      }
      console.log(this.structureSelect.length + ' ' + this.structureSelect);
    } else {
      for (let i = 0; i < this.structureSelect.length; i++) {
        if (id === this.structureSelect[i] ) {
          console.log('oui');
          this.structureSelect = this.structureSelect.filter((value) => {
            return value !== id;
          });
          break;
        } else {
          indice++;
        }
      }
      if (indice === this.structureSelect.length) {
        this.structureSelect.push(id);
      }
      console.log(this.structureSelect.length + ' ' + this.structureSelect);
    }
  }

  OnSelectOrUnselectStructureImpli(id: number) {
    console.log(id);
    let indice = 0;
    if (this.structureImpliSelect.length === 0) {
      this.structureImpliSelect.push(id);
    } else if (this.structureImpliSelect.length === 1) {
      if (this.structureImpliSelect[0] === id) {
        this.structureImpliSelect = this.structureImpliSelect.filter((value) => {
          return value !== id;
        });
      } else {
        this.structureImpliSelect.push(id);
      }
      console.log(this.structureImpliSelect.length + ' ' + this.structureImpliSelect);
    } else {
      for (let i = 0; i < this.structureImpliSelect.length; i++) {
        if (id === this.structureImpliSelect[i] ) {
          console.log('oui');
          this.structureImpliSelect = this.structureImpliSelect.filter((value) => {
            return value !== id;
          });
          break;
        } else {
          indice++;
        }
      }
      if (indice === this.structureImpliSelect.length) {
        this.structureImpliSelect.push(id);
      }
      console.log(this.structureImpliSelect.length + ' ' + this.structureImpliSelect);
    }
  }
  OnSelectOrUnselectSource(id: number) {
    console.log(id);
    let indice = 0;
    if (this.sourcefiSelect.length === 0) {
      this.sourcefiSelect.push(id);
    } else if (this.sourcefiSelect.length === 1) {
      if (this.sourcefiSelect[0] === id) {
        this.sourcefiSelect = this.sourcefiSelect.filter((value) => {
          return value !== id;
        });
      } else {
        this.sourcefiSelect.push(id);
      }
      console.log(this.sourcefiSelect.length + ' ' + this.sourcefiSelect);
    } else {
      for (let i = 0; i < this.sourcefiSelect.length; i++) {
        if (id === this.sourcefiSelect[i] ) {
          console.log('oui');
          this.sourcefiSelect = this.sourcefiSelect.filter((value) => {
            return value !== id;
          });
          break;
        } else {
          indice++;
        }
      }
      if (indice === this.sourcefiSelect.length) {
        this.sourcefiSelect.push(id);
      }
      console.log(this.sourcefiSelect.length + ' ' + this.sourcefiSelect);
    }
  }
  getStructure(id) {
    return this.structures.find(function (s) { return s.id === +id; });
  }
  getSource(id) {
    return this.sources.find(function (s) { return s.id === +id; });
  }
  getIndicateur(id) {
    return this.indicateur.find(function (s) { return s.id === +id; });
  }
  addStructureSuper() {
    console.log(this.singleSelectValueStructureSuper);
    console.log(this.getStructure(+this.singleSelectValueStructureSuper))
    this.structureSelect.push({
      id: +this.singleSelectValueStructureSuper,
      type: 1
    });
    this.structureSelectShow.push(this.getStructure(+this.singleSelectValueStructureSuper));
  }
  addStructureImpli() {
    this.structureImpliSelect.push({
      id: +this.singleSelectValueStructureImpl,
      type: 2
    });
    this.structureImpliSelectShow.push(this.getStructure(+this.singleSelectValueStructureImpl));
  }
  addIndicateur() {
    this.indicateurSelect.push( {denomination: this.indicateurLabel});
    this.indicateurLabel !== '' ? this.indicateurSelectShow.push(this.indicateurLabel) : console.log();
  }
   addSource() {
    this.sourceFi.push( {
      id: +this.singleSelectValueSource[0],
      budget_allocated : this.montantValue
  });
  this.sourcefiSelectShow.push(this.getSource(+this.singleSelectValueSource[0]));
  this.montantSelect.push(this.montantValue);
  }

  


  onSubmit() {
    const struc = [{id: +this.singleSelectValueStructure,type: 0}]
    this.activiteService.createActivite(this.utilService.changeDateFornat(this.utilService
      .getDate(this.dateDebut.year, this.dateDebut.month, this.dateDebut.day)), this.utilService.changeDateFornat(this.utilService
        .getDate(this.dateFin.year, this.dateFin.month, this.dateFin.day)), this.libelle,
       this.poids, this.montant, +this.singleSelectValueAction[0], +this.singleSelectValueStructure[0],
       this.projet, this.sourceFi, this.structureImpliSelect.concat(this.structureSelect).concat(struc) , this.code, this.indicateurSelect, [+this.singleSelectOptionsVille])
       .subscribe((res) => {
         console.log(res);
         this.router.navigate(['/dashboard/fichier/base/activite/load']);
       }, (error: ErrorResponse) => {
        console.log(error);
        // tslint:disable-next-line:forin
        for (const key in error.error['error']) {
            console.log(key);
            if (key !== 'error') {
              console.log(error.error['error'][key]);
            this.message = error.error['error'][key];
            break;
            }
        }
            this.router.navigate(['/dashboard/fichier/base/activite/add']);

       });
  }

}
