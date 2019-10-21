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
  return this.httpClient.get(BASE_URL + 'towns', this.options  );
  }
  getVille(id) {
    return this.httpClient.get(BASE_URL + 'towns/' + id, this.options);
  }
  deleteVille(id){
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/villes/' + id, this.options);
  }

  createVille(code: string, denomination: string, department_id: number) {
    const data = {
      code: code,
      denomination: denomination,
      department_id: department_id
    };
    return this.httpClient.post(BASE_URL + 'administrator/create-town', data, this.options);
  }
  update(code: string, denomination: string, department_id: number, id) {
    const data = {
      code: code,
      denomination: denomination,
      department_id: department_id
    };
    return this.httpClient.put(BASE_URL + 'administrator/update-town/' + id, data, this.options);
  }
}
