import { Injectable } from '@angular/core';

import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';
import { HttpClient } from '@angular/common/http';
import {CreateStructure} from '../../models/structure.model';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getStructureList() {

    return this.httpClient.get(BASE_URL + 'structures', this.options  );
  }
  getStructure(id) {

    return this.httpClient.get(BASE_URL + 'structures/' + id, this.options  );
  }
  createStructure(code, denomination, email, telephon, ville,  sigle, boite_postal) {
    const data = {
      code : code,
      denomination : denomination,
      email : email,
      telephone : telephon,
      ville_id : ville,
      sigle: sigle,
      boite_postal: boite_postal
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrateurs/2/structures', data, this.options);
  }
  update(code, denomination, email, telephon, ville, sigle, boite_postal, id) {
    const data = {
      code : code,
      denomination : denomination,
      email : email,
      telephone : telephon,
      ville_id : ville,
      sigle: sigle,
      boite_postal: boite_postal
    };
    console.log(data);
    return this.httpClient.put(BASE_URL + 'administrateurs/2/structures/' + id, data, this.options);
  }

  deleteStructure(id) {
      return this.httpClient.delete(BASE_URL + 'administrateurs/2/structures/' + id, this.options);
  }
}
