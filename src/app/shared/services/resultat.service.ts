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
    return this.httpClient.get(BASE_URL + 'resultats', this.options  );
    }
  deleteResultat(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/resultats/' + id, this.options);
  }
  createResultats(denomination: string) {
    const data = {
      denomination: denomination
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/resultats', data, this.options);
  }
  update(denomination: string) {
    const data = {
      denomination: denomination
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/resultats', data, this.options);
  }
  }
