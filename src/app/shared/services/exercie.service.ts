import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from './utils.service';
import {BASE_URL} from '../../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class ExercieService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getExerciceList() {
    const header = new HttpHeaders;
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.httpClient.get(BASE_URL + 'exercices', this.options);
  }

  getExercice(id) {
    return this.httpClient.get(BASE_URL + 'exercices/' + id, this.options);
  }


  deleteExercice(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/1/supprimer-suivi-tache/' + id, this.options);
  }

  createExercice(annee: number, libelle: string, dateDebut: string, dateFin: string) {
    const data = {
      libelle: libelle,
      annee: annee,
      started_at: dateDebut,
      end_at: dateFin,
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/1/exercices', data, this.options);
  }
  updateExercice(annee: number, libelle: string, dateDebut: string, dateFin: string, id: number) {
    const data = {
      libelle: libelle,
      annee: annee,
      started_at: dateDebut,
      end_at: dateFin,
    };
    return this.httpClient.put(BASE_URL + 'administrateurs/1/exercices/' + id, data, this.options);
  }





}
