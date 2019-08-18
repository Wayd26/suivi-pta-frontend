import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from './utils.service';
import {BASE_URL} from '../../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class ObjectifSpecifiqueService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getObjectifList() {
    const header = new HttpHeaders ;
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.httpClient.get(BASE_URL + 'objectifs', this.options );
  }
}
