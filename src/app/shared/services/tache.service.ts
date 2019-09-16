import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getTacheList() {
  return this.httpClient.get(BASE_URL + 'taches', this.options );
  }
  getTache(id){
    return this.httpClient.get(BASE_URL + 'taches/' + id, this.options);
  }
  deleteTache(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/taches/' + id, this.options);
  }

  createTache(code: string, denomination: string) {
    const data = {
      code: code,
      denomination: denomination
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/tache', data, this.options);
  }
  update(code: string, denomination: string, id: number) {
    const data = {
      code: code,
      denomination: denomination
    };
    return this.httpClient.put(BASE_URL + 'administrateurs/2/tache/' + id, data, this.options);
  }
}
