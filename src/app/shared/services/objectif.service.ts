import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from './utils.service';
import {BASE_URL} from '../../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getObjectifList() {

    return this.httpClient.get(BASE_URL + 'objectives', this.options  );
  }

  getObjectif(id) {
    return this.httpClient.get(BASE_URL + 'objectives/' + id, this.options);
  }
  deleteObjectif(id) {
    return this.httpClient.delete(BASE_URL + 'administrator/remove-objective/' + id, this.options);
  }

  createObjectif(code: string, denomination: string, programm_id: number) {
    const data = {
      code: code,
      denomination: denomination,
      programm_id: programm_id
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrator/create-objective', data, this.options);
  }
  updateObjectif(code: string, denomination: string, programm_id: number, id: number) {
    const data = {
      code: code,
      denomination: denomination,
      programm_id: programm_id
    };

    return this.httpClient.put(BASE_URL + 'administrator/update-objective/'  + id, data, this.options);
  }
}
