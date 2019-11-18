import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';
import { SourceFinancementActivite } from 'src/app/models/activite.model';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getActiviteList() {
  return this.httpClient.get(BASE_URL + 'activities', this.options  );
  }
  getActivite(id) {
    return this.httpClient.get(BASE_URL + 'activities/' + id, this.options  );
    }
  deleteActivite(id) {
    return this.httpClient.delete(BASE_URL + 'administrator/remove-subaction/' + id, this.options);
  }
  createActivite(started_at: string, ended_on: string, libelle: string, poids: number, montant: number, action_id: number,
    structure_id: number, est_pip: boolean, source_financement: SourceFinancementActivite[],
    structures: any [], code: string, indicators: any []) {
    const data = {
      started_on: started_at,
      ended_on: ended_on,
      denomination: libelle,
      weight_in_subaction: poids,
      budget: montant,
      subaction_id: action_id,
      structure_id: structure_id,
      is_pip: est_pip === true ? 1 : 0,
      fundings: source_financement,
      structures: structures,
      indicators: indicators,
      code: code
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrator/create-activity', data, this.options);
  }

  updateActivite(started_at: string, ended_on: string, libelle: string, poids: number, montant: number, action_id: number,
                 structure_id: number, est_pip: boolean, source_financement: SourceFinancementActivite[],
                 structures: any [], code: string, indicators: any [],  id: number) {
    const data = {
      started_on: started_at,
      ended_on: ended_on,
      denomination: libelle,
      weight_in_subaction: poids,
      budget: montant,
      subaction_id: action_id,
      structure_id: structure_id,
      is_pip: est_pip === true ? 1 : 0,
     // fundings: source_financement,
     // structures: structures,
     // indicators: indicators,
      code: code
    };
    console.log(data);
    return this.httpClient.put(BASE_URL + 'administrator/update-activity/' + id , data, this.options);
  }
}
