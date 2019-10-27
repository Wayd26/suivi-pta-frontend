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
import {Resultat} from '../../models/resultat.model';

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
  public resultats: Resultat[];

  constructor() { }
 public getProgrammes (): Programme[] {
    return this.programmes;
}
 public setProgrammes(data: Programme[]) {
    this.programmes = data;
  }
  public getActions (): Action[] {
    return this.actions;
}
  public setActions(data: Action[]) {
    this.actions = data;
  }
  public getActivites (): Activite[] {
    return this.activites;
}
  public setActivites(data: Activite[]) {
    this.activites = data;
  }
  public getExercices (): Exercice[] {
    return this.exercices;
  }
  public setExercices(data: Exercice[]) {
    this.exercices = data;
  }
  public getMinisteres (): Ministere[] {
    return this.ministere;
  }
  public setMinisteres(data: Ministere[]) {
    this.ministere = data;
  }
  public getObjectifs (): ObjectifModel[] {
    return this.objectifs;
  }
  public setObjectifs(data: ObjectifModel[]) {
    this.objectifs = data;
  }
  public getStructures (): Structure[] {
    return this.structures;
  }
  public setStructures(data: Structure[]) {
    this.structures = data;
  }
  public getTaches (): Tache[] {
    return this.taches;
  }
  public setTaches(data: Tache[]) {
    this.taches = data;
  }
  public getSourceFis (): SourceFinancement[] {
    return this.sourceFinancements;
  }
  public setSourceFis(data: SourceFinancement[]) {
    this.sourceFinancements = data;
  }
  public getTypeSourceFis (): TypeSourceFinancement[] {
    return this.typeSourceFinancement;
  }
  public setTypeSourceFis(data: TypeSourceFinancement[]) {
    this.typeSourceFinancement = data;
  }
  public getDepartements (): Departement[] {
    return this.departements;
  }
  public setDepartements(data: Departement[]) {
    this.departements = data;
  }
  public getVilles (): Ville[] {
    return this.villes;
  }
  public setVilles(data: Ville[]) {
    this.villes = data;
  }

 public getSuiviTaches (): SuiviTache[] {
    return this.suiviTaches;
  }
 public setSuiviTaches(data: SuiviTache[]) {
    this.suiviTaches = data;
  }

  public getIndicateurs (): Indicateur[] {
    return this.indicateurs;
  }
  public setIndicateurs(data: Indicateur[]) {
    this.indicateurs = data;
  }


  public getResultats (): Resultat[] {
    return this.resultats;
  }
  public setResultats(data: Resultat[]) {
    this.resultats = data;
  }

}
