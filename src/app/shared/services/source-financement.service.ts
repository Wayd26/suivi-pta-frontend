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
  deleteSourceFinamcement(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/sources_financements/' + id, this.options);
  }
  createSource(libelle: string, poids: number, isProject: boolean, typeSource: number) {
    const data = {
      libelle: libelle,
      poids_projet: poids,
      est_projet: isProject,
      type_source_financement_id: typeSource
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/sources_financements', data, this.options);
  }
  update(libelle: string, poids: number, isProject: boolean, typeSource: number) {
    const data = {
      libelle: libelle,
      poids_projet: poids,
      est_projet: isProject,
      type_source_financement_id: typeSource
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/sources_financements', data, this.options);
  }
}
