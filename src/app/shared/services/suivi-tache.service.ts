import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from './utils.service';
import {BASE_URL} from '../../constants/urlConstants';
import {date} from 'ng2-validation/dist/date';

@Injectable({
  providedIn: 'root'
})
export class SuiviTacheService {


  constructor(private httpClient: HttpClient, private utilsService: UtilsService) {
  }

  options = this.utilsService.getOption();

  getSuiviTacheList() {
    const header = new HttpHeaders;
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.httpClient.get(BASE_URL + 'task-trackings', this.options);
  }

  getSuiviTache(id) {
    return this.httpClient.get(BASE_URL + 'task-trackings/' + id, this.options  );
  }


  deleteSuiviTache(id) {
    return this.httpClient.delete(BASE_URL + 'administrator/remove-task-tracking/' + id, this.options);
  }

  createSuiviTache(activity_id: number, task_id: number, started_on: string, ended_on: string, budget: number, weight_in_activity: number) {
    const data = {
      activity_id: activity_id,
      task_id: task_id,
      started_on: started_on,
      ended_on: ended_on,
      budget: budget,
      weight_in_activity: weight_in_activity
    };
    console.log(data);
    return this.httpClient.post(BASE_URL + 'administrator/create-task-tracking', data, this.options);
  }
  updateSuiviTache(activity_id: number, task_id: number, started_on: string, ended_on: string, budget: number, weight_in_activity: number, id: number) {
    const data = {
      activity_id: activity_id,
      task_id: task_id,
      started_on: started_on,
      ended_on: ended_on,
      budget: budget,
      weight_in_activity: weight_in_activity
    };
    return this.httpClient.put(BASE_URL + 'administrator/update-task-tracking/' + id, data, this.options);
  }


  updateSuiviPTA(activity_id: number, task_id: number, is_realized: boolean, effective_end_date: string, comment: string, id: number) {
    const data = {
      activity_id: activity_id,
      task_id: task_id,
      is_realized: is_realized,
      effective_end_date: effective_end_date,
      comment: comment
    };
    return this.httpClient.put(BASE_URL + 'administrator/update-task-tracking/' + id, data, this.options);
  }
}
