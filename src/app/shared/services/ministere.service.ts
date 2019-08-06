import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MinistereService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getMinistereList() {

    return this.httpClient.get(BASE_URL + 'ministeres', this.options  );
  }
  deleteMinistere(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/ministeres/' + id, this.options);
  }
  createMinistere(denomination: string, sigle: string , ville_id: number, email: string, telephone: string) {
    const data = {
      denomination: denomination,
      sigle: sigle,
      ville_id: ville_id,
      email: email,
      telephone: telephone
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/ministeres', data, this.options);
  }
}
