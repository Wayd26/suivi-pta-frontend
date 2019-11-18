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
    return this.httpClient.get(BASE_URL + 'indicators', this.options  );
  }
  getIndicateur(id) {
    return this.httpClient.get(BASE_URL + 'indicators/' + id, this.options  );
  }

  createIndicateur(code: number, denomination: string, target_value: number, realized_value: number, activity_id: number) {
    const data = {
      code: code,
      denomination: denomination,
      target_value: target_value,
      realized_value: realized_value,
      activity_id: activity_id

  };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrator/create-indicator', data, this.options);
  }

  updateIndicateur(denomination: string, target_value: number, realized_value: number, activity_id: number, id: number) {
    const data = {
      denomination: denomination,
      target_value: target_value,
      realized_value: realized_value,
      activity_id: activity_id
    };
    console.log('Voyons ce qui est envoyé comme id de activite...');
    console.log(data);
    return this.httpClient.put(BASE_URL + 'administrator/update-indicator/' + id, data, this.options);
  }
  deleteIndicateur(id) {
     return this.httpClient.delete(BASE_URL + 'administrator/remove-indicator/' + id, this.options);
  }
}
