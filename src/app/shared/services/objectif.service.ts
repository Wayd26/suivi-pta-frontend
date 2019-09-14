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

    return this.httpClient.get(BASE_URL + 'objectifs', this.options  );
  }

  getObjectif(id) {
    return this.httpClient.get(BASE_URL + 'objectifs/' + id, this.options);
  }
  deleteObjectif(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/objectifs/' + id, this.options);
  }
  createObjectif(code: string, libelle: string, programme: number) {
    const data = {
      code: code,
      libelle: libelle,
      programme_id: programme
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrateurs/2/objectifs', data, this.options);
  }
  updateObjectif(code: string, libelle: string, programme: number, id: number) {
    const data = {
      code: code,
       libelle: libelle,
      programme_id: programme
    };

    return this.httpClient.put(BASE_URL + 'administrateurs/2/objectifs/'  + id, data, this.options);
  }
}
