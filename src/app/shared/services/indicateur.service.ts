import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from './utils.service';
import {BASE_URL} from '../../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class IndicateurService {


  identifiant: number;
  libelle: string;
  valeur_cible: number;
  valeur_realisee: number;
  activite_id: string;


  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getIndicateurList() {
    return this.httpClient.get(BASE_URL + 'indicateurs', this.options  );
  }
  getIndicateur(id) {
    return this.httpClient.get(BASE_URL + 'indicateurs/' + id, this.options  );
  }
  createIndicateur(identifiant: number, libelle: string, valeurCible: number, valeurRealisee: number, idActivite: string) {
    const data = {
      identifiant: identifiant,
      libelle: libelle,
      valeur_cible: valeurCible,
      valeur_realisee: valeurRealisee,
      activite_id: idActivite

  };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrateurs/9/indicateurs', data, this.options);
  }
  updateIndicateur(identifiant: number, libelle: string, valeurCible: number, valeurRealisee: number, idActivite: string, id: number) {
    const data = {
      identifiant: identifiant,
      libelle: libelle,
      valeur_cible: valeurCible,
      valeur_realisee: valeurRealisee,
      activite_id: idActivite
    };
    return this.httpClient.put(BASE_URL + 'administrateurs/1/indicateurs/' + id, data, this.options);
  }
  deleteIndicateur(id) {
    // return this.httpClient.delete(BASE_URL + 'administrateurs/2/departements/' + id, this.options);
  }
}
