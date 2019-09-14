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

  getResultat(id) {

    return this.httpClient.get(BASE_URL + 'resultats/' + id, this.options  );
  }
  deleteResultat(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/resultats/' + id, this.options);
  }
  createResultat(code: string, denomination: string, objectif: number) {
    const data = {
      code: code,
      libelle: denomination,
      objectif_specifique_id: objectif
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/resultats', data, this.options);
  }
  updateResultat(code: string, denomination: string, objectif: number, id: number) {
    const data = {
      code: code,
      libelle: denomination,
      objectif_specifique_id: objectif
    };

    console.log()
    return this.httpClient.put(BASE_URL + 'administrateurs/2/resultats/'  + id, data, this.options);
  }
  }
