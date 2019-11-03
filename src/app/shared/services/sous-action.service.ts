import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from './utils.service';
import {BASE_URL} from '../../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class SousActionService {

  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getSousActionList() {

    return this.httpClient.get(BASE_URL + 'subactions', this.options  );
  }

  getSousAction(id) {
    return this.httpClient.get(BASE_URL + 'subactions/' + id, this.options);
  }

  deleteSousAction(id) {
    return this.httpClient.delete(BASE_URL + 'administrator/remove-subaction/' + id, this.options);
  }

  createSousAction(code: string, denomination: string, weight_in_action: number, action_id: number) {
    const data = {
      code: code,
      denomination: denomination,
      weight_in_action: weight_in_action,
      action_id: action_id
    };
    return this.httpClient.post(BASE_URL + 'administrator/create-subaction', data, this.options);
  }
  updateSousAction(code: string, denomination: string, weight_in_action: number, action_id: number, id: number) {
    const data = {
      code: code,
      denomination: denomination,
      weight_in_action: weight_in_action,
      action_id: action_id
    };
    return this.httpClient.put(BASE_URL + 'administrator/update-subaction/' + id, data, this.options);
  }
}
