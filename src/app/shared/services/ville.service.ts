import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getVilleList() {
  return this.httpClient.get(BASE_URL + 'villes', this.options  );
  }
  getVille(id) {
    return this.httpClient.get(BASE_URL + 'villes/' + id, this.options);
  }
  deleteVille(id){
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/villes/' + id, this.options);
  }
  createVille(code: string, denomination: string, departement_id: number) {
    const data = {
      code: code,
      denomination: denomination,
      departement_id: departement_id
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/1/villes', data, this.options);
  }
  update(code: string, denomination: string, departement_id: number, id) {
    const data = {
      code: code,
      denomination: denomination,
      departement_id: departement_id
    };
    return this.httpClient.put(BASE_URL + 'administrateurs/1/villes/' + id, data, this.options);
  }
}
