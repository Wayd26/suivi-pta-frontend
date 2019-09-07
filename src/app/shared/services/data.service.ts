import { Injectable } from '@angular/core';
import {Programme} from '../../models/programme.model';
import {Action} from '../../models/action.model';
import {Activite} from '../../models/activite.model';
import {Exercice} from '../../models/exercice.model';
import {Ministere} from '../../models/ministere.model';
import {ObjectifModel} from '../../models/objectif.model';
import {Structure} from '../../models/structure.model';
import {Tache} from '../../models/tache.model';
import {SourceFinancement} from '../../models/sourceFi.model';
import {TypeSourceFinancement} from '../../models/typeSourceFi.model';
import {Departement} from '../../models/departement.model';
import {Ville} from '../../models/ville.model';
import {SuiviTache} from '../../models/suivi_tache.model';
import {Indicateur} from '../../models/indicateur.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public programmes: Programme[];
  public actions: Action[];
  public activites: Activite[];
  public exercices: Exercice[];
  public ministere: Ministere[];
  public objectifs: ObjectifModel[];
  public structures: Structure[];
  public taches: Tache[];
  public sourceFinancements: SourceFinancement[];
  public typeSourceFinancement: TypeSourceFinancement[];
  public departements: Departement[];
  public villes: Ville[];
  public suiviTaches: SuiviTache[];
  public indicateurs: Indicateur[];

  constructor() { }
 public getProgrammes (): Programme[] {
    return this.programmes;
}
 public setProgrammes(data: Programme[]) {
    this.programmes = data;
  }
  getActions (): Action[] {
    return this.actions;
}
  setActions(data: Action[]) {
    this.actions = data;
  }
  getActivites (): Activite[] {
    return this.activites;
}
  setActivites(data: Activite[]) {
    this.activites = data;
  }
  getExercices (): Exercice[] {
    return this.exercices;
  }
  setExercices(data: Exercice[]) {
    this.exercices = data;
  }
  getMinisteres (): Ministere[] {
    return this.ministere;
  }
  setMinisteres(data: Ministere[]) {
    this.ministere = data;
  }
  getObjectifs (): ObjectifModel[] {
    return this.objectifs;
  }
  setObjectifs(data: ObjectifModel[]) {
    this.objectifs = data;
  }
  getStructures (): Structure[] {
    return this.structures;
  }
  setStructures(data: Structure[]) {
    this.structures = data;
  }
  getTaches (): Tache[] {
    return this.taches;
  }
  setTaches(data: Tache[]) {
    this.taches = data;
  }
  getSourceFis (): SourceFinancement[] {
    return this.sourceFinancements;
  }
  setSourceFis(data: SourceFinancement[]) {
    this.sourceFinancements = data;
  }
  getTypeSourceFis (): TypeSourceFinancement[] {
    return this.typeSourceFinancement;
  }
  setTypeSourceFis(data: TypeSourceFinancement[]) {
    this.typeSourceFinancement = data;
  }
  getDepartements (): Departement[] {
    return this.departements;
  }
  setDepartements(data: Departement[]) {
    this.departements = data;
  }
  getVilles (): Ville[] {
    return this.villes;
  }
  setVilles(data: Ville[]) {
    this.villes = data;
  }

  getSuiviTaches (): SuiviTache[] {
    return this.suiviTaches;
  }
  setSuiviTaches(data: SuiviTache[]) {
    this.suiviTaches = data;
  }

  getIndicateurs (): Indicateur[] {
    return this.indicateurs;
  }
  setIndicateurs(data: Indicateur[]) {
    this.indicateurs = data;
  }

}
