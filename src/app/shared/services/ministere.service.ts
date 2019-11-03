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

    return this.httpClient.get(BASE_URL + 'ministries', this.options  );
  }
  getMinistere(id) {

    return this.httpClient.get(BASE_URL + 'ministries/' + id, this.options  );
  }
  deleteMinistere(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/1/ministries/' + id, this.options);
  }
  createMinistere(code: string, denomination: string, email: string, sigle: string, telephone: string, ville_id: number) {
    const data = {
      code: code,
      denomination: denomination,
      email: email,
      sigle: sigle,
      telephone: telephone,
      ville_id: ville_id
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrateurs/1/ministries', data, this.options);
  }
  update(code: string, denomination: string, sigle: string , ville_id: number, email: string, telephone: string, id: number) {
    const data = {
      code: code,
      denomination: denomination,
      sigle: sigle,
      ville_id: ville_id,
      email: email,
      telephone: telephone
    };
    console.log(data);
    return this.httpClient.put(BASE_URL + 'administrateurs/1/ministries/' + id, data, this.options);
  }
}
