import { Injectable } from '@angular/core';
import {BASE_URL} from '../../constants/urlConstants';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getResultatList() {
    return this.httpClient.get(BASE_URL + 'results', this.options  );
    }

  getResultat(id) {

    return this.httpClient.get(BASE_URL + 'results/' + id, this.options  );
  }
  deleteResultat(id) {
    return this.httpClient.delete(BASE_URL + 'administrator/remove-result/' + id, this.options);
  }

  createResultat(code: string, denomination: string, objective_id: number) {
    const data = {
      code: code,
      denomination: denomination,
      objective_id: objective_id
    };
    return this.httpClient.post(BASE_URL + 'administrator/create-result', data, this.options);
  }
  updateResultat(code: string, denomination: string, objective_id: number, id: number) {
    const data = {
      code: code,
      denomination: denomination,
      objective_id: objective_id
    };

    console.log()
    return this.httpClient.put(BASE_URL + 'administrator/update-result/'  + id, data, this.options);
  }
  }
