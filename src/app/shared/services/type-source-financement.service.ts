import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class TypeSourceFinancementService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getTypeSourceFinancementList() {

    return this.httpClient.get(BASE_URL + 'types_sources_financements', this.options  );
  }
  getTypeSourceFinancement(id) {
      return this.httpClient.get(BASE_URL + 'types_sources_financements/' + id, this.options);
  }
  deleteTypeSource(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/types_sources_financements/' + id, this.options);
  }
  createTypeSource(code: string, libelle: string) {
    const data = {
      code: code,
      libelle: libelle
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/types_sf', data, this.options);
  }
  update(code: string, libelle: string, id: number) {
    const data = {
      code: code,
      libelle: libelle
    };
    return this.httpClient.put(BASE_URL + 'administrateurs/2/types_sf/' + id, data, this.options);
  }
}
