import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getActiviteList() {
  return this.httpClient.get(BASE_URL + 'activites', this.options  );
  }
  deleteActivite(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/activites/' + id, this.options);
  }
  createActivite(denomination: string) {
    const data = {
      denomination: denomination
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/activites', data, this.options);
  }

  updateActivite(denomination: string) {
    const data = {
      denomination: denomination
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/activites', data, this.options);
  }
}
