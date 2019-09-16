import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from './utils.service';
import {BASE_URL} from '../../constants/urlConstants';
import {date} from 'ng2-validation/dist/date';

@Injectable({
  providedIn: 'root'
})
export class SuiviTacheService {


  constructor(private httpClient: HttpClient, private utilsService: UtilsService) {
  }

  options = this.utilsService.getOption();

  getSuiviTacheList() {
    const header = new HttpHeaders;
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.httpClient.get(BASE_URL + 'taches/suivis', this.options);
  }

  getSuiviTache(id) {
    return this.httpClient.get(BASE_URL + 'suivi-tache/' + id, this.options  );
  }


  deleteSuiviTache(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/1/supprimer-suivi-tache/' + id, this.options);
  }
  createSuiviTache(activite: number, tache: string, dateDebut: Date, dateFin: Date, montant: number, poids: number) {
    const data = {
      activite_id: activite,
      _tache: tache,
      started_at: dateDebut,
      end_at: dateFin,
      montant: montant,
      poids: poids
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/1/taches/' + tache + '/suivre', data, this.options);
  }
  updateSuiviTache(activite: string, tache: string, dateDebut: Date, dateFin: Date, montant: number, poids: number, id: number) {
    const data = {
      _activite: activite,
      _tache: tache,
      started_at: dateDebut,
      end_at: dateFin,
      montant: montant,
      poids: poids
    };
    return this.httpClient.put(BASE_URL + 'administrateurs/1/modifier-suvi-tache/' + id, data, this.options);
  }


  updateSuiviPTA(activite: string, tache: string, est_realisee: boolean, dateFinRealisation: Date, observations: string, id: number) {
    const data = {
      _activite: activite,
      _tache: tache,
      est_realisee: est_realisee,
      real_end_at: dateFinRealisation,
      commentaire: observations
    };
    return this.httpClient.put(BASE_URL + 'administrateurs/1/modifier-suvi-tache/' + id, data, this.options);
  }
}
