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
  createStructure(denomination, email, telephon, ville) {
    const data = {
      denomination : denomination,
      email : email,
      telephon : telephon,
      ville : ville

    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrateurs/2/structures', data, this.options);
  }
  update(denomination, email, telephon, ville) {
    const data = {
      denomination : denomination,
      email : email,
      telephon : telephon,
      ville : ville
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrateurs/2/structures', data, this.options);
  }

  deleteStructure(id) {
      return this.httpClient.delete(BASE_URL + 'administrateurs/2/structures/' + id, this.options);
  }
}
