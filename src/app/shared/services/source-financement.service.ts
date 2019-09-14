import { Injectable } from '@angular/core';
import {UtilsService} from './utils.service';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class SourceFinancementService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getSourceFinancementList() {

    return this.httpClient.get(BASE_URL + 'sources_financements', this.options  );
  }
  getSourceFinancement(id){
    return this.httpClient.get(BASE_URL + 'sources_financements/' + id, this.options);
  }
  deleteSourceFinamcement(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/financements/' + id, this.options);
  }
  createSource(code: string, libelle: string, poids: number, chapitre_imputation: string, isProject: boolean, typeSource: number) {
    const data = {
      code: code,
      libelle: libelle,
      poids_projet: poids,
      est_projet: isProject,
      type_source_financement_id: typeSource,
      chapitre_imputation: chapitre_imputation
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/financements', data, this.options);
  }

  update(code: string, libelle: string, poids: number, chapitre_imputation: string, isProject: boolean, typeSource: number, id: number) {
    const data = {
      code: code,
      libelle: libelle,
      poids_projet: poids,
      est_projet: isProject,
      type_source_financement_id: typeSource,
      chapitre_imputation: chapitre_imputation
    };
    return this.httpClient.put(BASE_URL + 'administrateurs/2/sources_financements'  + id, data, this.options);
  }
}
