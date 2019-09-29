import { Component, OnInit } from '@angular/core';
import { Structure, ListStructureResponse } from 'src/app/models/structure.model';
import { SourceFinancement, ListSourceFinancementResponse } from 'src/app/models/sourceFi.model';
import { SourceFinancementActivite, Activite, ActiviteResponse } from 'src/app/models/activite.model';
import { ExercieService } from 'src/app/shared/services/exercie.service';
import { StructureService } from 'src/app/shared/services/structure.service';
import { ActionService } from 'src/app/shared/services/action.service';
import { DepartementService } from 'src/app/shared/services/departement.service';
import { VilleService } from 'src/app/shared/services/ville.service';
import { SourceFinancementService } from 'src/app/shared/services/source-financement.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ActiviteService } from 'src/app/shared/services/activite.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ListExerciceResponse } from 'src/app/models/exercice.model';
import { ListVilleResponse } from 'src/app/models/ville.model';
import { ListActionResponse } from 'src/app/models/action.model';
import { ListDepartementResponse } from 'src/app/models/departement.model';

@Component({
  selector: 'app-activite-edit',
  templateUrl: './activite-edit.component.html',
  styleUrls: ['./activite-edit.component.css']
})
export class ActiviteEditComponent implements OnInit {
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
  sources: SourceFinancement[] = [];
  sourceFi: SourceFinancementActivite[] = [];
  singleSelectOptionsExercice: any = [];
  singleSelectOptionsStructure: any = [];
  singleSelectOptionsTypeActivite: any = [];
  singleSelectOptionsAction: any = [];
  singleSelectOptionsDepartement: any = [];
  singleSelectOptionsVille: any = [];
  singleSelectOptionsSource: any = [];
  structureSelect: number[] = [];
  sourcefiSelect: number[] = [];
  structureImpliSelect: number[] = [];
  structureSelectShow: Structure[] = [];
  sourcefiSelectShow: SourceFinancement[] = [];
  structureImpliSelectShow: Structure[] = [];
  montantValue = 0;
  montantSelect: number[] = [];

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
  message = '';
  id;
  activite: Activite;
  constructor(private exerciceService: ExercieService, private structureService: StructureService, private actionService: ActionService
    , private departementService: DepartementService, private villeService: VilleService,
     private sourceServices: SourceFinancementService, private utilService: UtilsService,
     private activiteService: ActiviteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.activiteService.getActivite(this.id)
    .subscribe((res: ActiviteResponse) => {
      this.activite = res.data;
    }, (erro) => {},
    () => {
      this.singleSelectValueExercice = [this.utilService.getIdData(this.activite.links, 'exercice')];
      this.code = this.activite.code;
      this.libelle = this.activite.libelle;
      this.montant = this.activite.montant;
      this.dateDebut = this.activite.date_debut;
      this.dateFin = this.activite.date_fin;
      this.poids = this.activite.poids;
      this.singleSelectValueStructure = [this.utilService.getIdData(this.activite.links, 'structure')];
      this.singleSelectValueAction = [this.utilService.getIdData(this.activite.links, 'action')];
      this.singleSelectValueDepartement = [this.utilService.getIdData(this.activite.links, 'departement')];
      this.singleSelectValueVille = [this.utilService.getIdData(this.activite.links, 'ville')];
    });
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
      this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        res.data.map((ville) => {
          this.singleSelectOptionsVille.push({
            label: ville.denomination,
            value: ville.identifiant,
            code: ville.identifiant
          });
        });
      });
      this.structureService.getStructureList()
      .subscribe((res: ListStructureResponse) => {
        this.structures = res.data;
        res.data.map((ville) => {
          this.singleSelectOptionsStructure.push({
            label: ville.denomination,
            value: ville.identifiant,
            code: ville.identifiant
          });
        });
      });
      this.actionService.getActionList()
      .subscribe((res: ListActionResponse) => {
        res.data.map((ville) => {
          this.singleSelectOptionsAction.push({
            label: ville.libelle,
            value: ville.identifiant,
            code: ville.identifiant
          });
        });
      });
      this.departementService.getDepartementList()
      .subscribe((res: ListDepartementResponse) => {
        res.data.map((ville) => {
          this.singleSelectOptionsDepartement.push({
            label: ville.denomination,
            value: ville.identifiant,
            code: ville.identifiant
          });
        });
      });
      this.sourceServices.getSourceFinancementList()
      .subscribe((res: ListSourceFinancementResponse) => {
        res.data.map((source) => {
          this.singleSelectOptionsSource.push({
            label: source.libelle,
            value: source.identifiant,
            code: source.identifiant
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
        this.structureSelect.push(this.structures[i].identifiant);
      }
    } else if (this.structureSelect.length === this.structures.length) {
      this.structureSelect = [];
    } else if (this.structureSelect.length > 0) {
      this.structureSelect = [];
      for (let i = 0 ; i < this.structures.length ; i++) {
        this.structureSelect.push(this.structures[i].identifiant);
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
    return this.structures.find(function (s) { return s.identifiant === +id; });
  }
  getSource(id) {
    return this.sources.find(function (s) { return s.identifiant === +id; });
  }
  addStructureSuper() {
    this.structureSelect.push(+this.singleSelectValueStructureSuper[0]);
    this.structureSelectShow.push(this.getStructure(+this.singleSelectValueStructureSuper[0]));
  }
  addStructureImpli() {
    this.structureImpliSelect.push(+this.singleSelectValueStructureImpl[0]);
    this.structureImpliSelectShow.push(this.getStructure(+this.singleSelectValueStructureImpl[0]));
  }
  addSource() {
    this.sourceFi.push( {
      id: +this.singleSelectValueSource[0],
      montant: this.montantValue
  });
  this.sourcefiSelectShow.push(this.getSource(+this.singleSelectValueSource[0]));
  this.montantSelect.push(this.montantValue);
  }

  onSubmit() {
    this.activiteService.updateActivite(this.utilService.changeDateFornat(this.utilService
      .getDate(this.dateDebut.year, this.dateDebut.month, this.dateDebut.day)), this.libelle,
       this.poids, this.montant, +this.singleSelectValueAction[0], +this.singleSelectValueStructure[0],
       this.projet, this.sourceFi, this.structureImpliSelect, this.structureSelect, this.code)
       .subscribe((res) => {
         console.log(res);
       }, (error: ErrorResponse) => {
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
            this.router.navigate(['/dashboard/fichier/base/activite/edit/' + this.id ]);
       });
  }
}
