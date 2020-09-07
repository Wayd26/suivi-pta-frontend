import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';
import {number} from 'ng2-validation/dist/number';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getActionList() {

    return this.httpClient.get(BASE_URL + 'actions', this.options  );
  }

  getAction(id) {
    return this.httpClient.get(BASE_URL + 'actions/' + id, this.options);
  }

  deleteAction(id) {
    return this.httpClient.delete(BASE_URL + 'administrator/remove-action/' + id, this.options);
  }

  createAction(code: string, denomination: string, weight_in_result: number, result_id: number) {
    const data = {
      code: code,
      denomination: denomination,
      weight_in_result: weight_in_result,
      result_id: result_id
    };
    return this.httpClient.post(BASE_URL + 'administrator/create-action', data, this.options);
  }
  updateAction(code: string, denomination: string, weight_in_result: number, result_id: number, id: number) {
    const data = {
      code: code,
      denomination: denomination,
      weight_in_result: weight_in_result,
      result_id: result_id
    };
    return this.httpClient.put(BASE_URL + 'administrator/update-action/' + id, data, this.options);
  }
}
