import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';
import {number} from 'ng2-validation/dist/number';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getActionList() {

    return this.httpClient.get(BASE_URL + 'actions', this.options  );
  }

  getAction(id) {
    return this.httpClient.get(BASE_URL + 'actions/' + id, this.options);
  }

  deleteAction(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/actions/' + id, this.options);
  }

  createAction(libelle: string, poids: number, resultat: number) {
    const data = {
      libelle: libelle,
      poids: poids,
      resultat_id: resultat
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/actions', data, this.options);
  }
  update(libelle: string, poids: number, resultat: number) {
    const data = {
      libelle: libelle,
      poids: poids,
      resultat_id: resultat
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/actions', data, this.options);
  }
}
