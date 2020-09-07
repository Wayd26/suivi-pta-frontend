import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getDepartementList() {
  return this.httpClient.get(BASE_URL + 'departments', this.options  );
  }
  getDepartemen(id) {
  return this.httpClient.get(BASE_URL + 'departments/' + id, this.options  );
  }
  createDepartement(code: string, denomination: string) {
    const data = {
      code: code,
      denomination: denomination
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrator/create-department', data, this.options);
  }
  update(code: string, denomination: string, id: number) {
    const data = {
      code: code,
      denomination: denomination
    };
    return this.httpClient.put(BASE_URL + 'administrator/update-department/' + id, data, this.options);
  }
  deleteDepartement(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/departements/' + id, this.options);
  }
}
