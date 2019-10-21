import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class TypeSourceFinancementService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getTypeSourceFinancementList() {

    return this.httpClient.get(BASE_URL + 'type-fundings', this.options  );
  }
  getTypeSourceFinancement(id) {
      return this.httpClient.get(BASE_URL + 'type-fundings/' + id, this.options);
  }
  deleteTypeSource(id) {
    return this.httpClient.delete(BASE_URL + 'administrator/remove-type-funding/' + id, this.options);
  }
  createTypeSource(code: string, denomination: string) {
    const data = {
      code: code,
      denomination: denomination
    };
    return this.httpClient.post(BASE_URL + 'administrator/create-type-funding', data, this.options);
  }
  update(code: string, denomination: string, id: number) {
    const data = {
      code: code,
      denomination: denomination
    };
    return this.httpClient.put(BASE_URL + 'administrator/update-type-funding/' + id, data, this.options);
  }
}
