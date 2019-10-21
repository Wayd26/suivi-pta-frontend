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

  createStructure(code, denomination, po_box, website, town_id, cellphone, email, abbreviation) {
    const data = {
      code : code,
      denomination : denomination,
      po_box: po_box,
      website: website,
      town_id: town_id,
      cellphone : cellphone,
      email : email,
      abbreviation : abbreviation
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrator/create-structure', data, this.options);
  }
  update(code, denomination, po_box, website, town_id, cellphone, email, abbreviation, id) {
    const data = {
      code : code,
      denomination : denomination,
      po_box: po_box,
      website: website,
      town_id: town_id,
      cellphone : cellphone,
      email : email,
      abbreviation : abbreviation
    };
    console.log(data);
    return this.httpClient.put(BASE_URL + 'administrator/update-structure/' + id, data, this.options);
  }

  deleteStructure(id) {
      return this.httpClient.delete(BASE_URL + 'administrator/remove-structure/' + id, this.options);
  }
}
