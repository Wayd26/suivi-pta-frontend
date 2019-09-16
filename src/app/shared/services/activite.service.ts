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
  return this.httpClient.get(BASE_URL + 'activites', this.options  );
  }
  getActivite(id) {
    return this.httpClient.get(BASE_URL + 'activites/' + id, this.options  );
    }
  deleteActivite(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/activites/' + id, this.options);
  }
  createActivite(started_at: string, libelle: string, poids: number, montant: number, action_id: number,
    structure_id: number, est_pip: boolean, source_financement: SourceFinancementActivite[],
    structures_impliquees: number[], structures_supervisions: number[], code: string) {
    const data = {
      started_at: started_at,
      libelle: libelle,
      poids: poids,
      montant: montant,
      action_id: action_id,
      structure_id: structure_id,
      est_pip: est_pip,
      source_financement: source_financement,
      structures_impliquees: structures_impliquees,
      structures_supervisions: structures_supervisions,
      code: code
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrateurs/2/activites', data, this.options);
  }

  updateActivite(started_at: string, libelle: string, poids: number, montant: number, action_id: number,
    structure_id: number, est_pip: boolean, source_financement: SourceFinancementActivite[],
    structures_impliquees: number[], structures_supervisions: number[], code: string) {
    const data = {
      started_at: started_at,
      libelle: libelle,
      poids: poids,
      montant: montant,
      action_id: action_id,
      structure_id: structure_id,
      est_pip: est_pip,
      source_financement: source_financement,
      structures_impliquees: structures_impliquees,
      structures_supervisions: structures_supervisions,
      code: code
    };
    console.log(data);
    return this.httpClient.put(BASE_URL + 'administrateurs/2/activites', data, this.options);
  }
}
