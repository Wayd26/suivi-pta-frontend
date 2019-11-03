import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from './utils.service';
import {BASE_URL} from '../../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class ExercieService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getExerciceList() {
    const header = new HttpHeaders;
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.httpClient.get(BASE_URL + 'exercises', this.options);
  }

  getExercice(id) {
    return this.httpClient.get(BASE_URL + 'exercises/' + id, this.options);
  }


  deleteExercice(id) {
    return this.httpClient.delete(BASE_URL + 'administrator/remove-exercise/' + id, this.options);
  }

  createExercice(denomination: string, year: number, started_on: string, ended_on: string) {
    const data = {
      denomination: denomination,
      year: year,
      started_on: started_on,
      ended_on: ended_on,
    };
    return this.httpClient.post(BASE_URL + 'administrator/create-exercise', data, this.options);
  }
  updateExercice(denomination: string, year: number, started_on: string, ended_on: string, id: number) {
    const data = {
      denomination: denomination,
      year: year,
      started_on: started_on,
      ended_on: ended_on,
    };
    return this.httpClient.put(BASE_URL + 'administrator/update-exercise/' + id, data, this.options);
  }





}
