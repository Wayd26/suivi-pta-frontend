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
    return this.httpClient.delete(BASE_URL + 'administrator/remove-ministry/' + id, this.options);
  }

  createMinistere(code: string, denomination: string, po_box: string, abbreviation: string, email: string, cellphone: string, _town: number) {
    const data = {
      code: code,
      denomination: denomination,
      email: email,
      po_box: po_box,
      abbreviation: abbreviation,
      cellphone: cellphone,
      _town: _town
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrator/create-ministry', data, this.options);
  }
  update(code: string, denomination: string, po_box: string, abbreviation: string, email: string, cellphone: string, _town: number, id: number) {
    const data = {
      code: code,
      denomination: denomination,
      email: email,
      po_box: po_box,
      abbreviation: abbreviation,
      cellphone: cellphone,
      _town: _town
    };
    console.log(data);
    return this.httpClient.put(BASE_URL + 'administrator/update-ministry/' + id, data, this.options);
  }
}
