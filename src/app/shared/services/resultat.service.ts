import { Injectable } from '@angular/core';
import {BASE_URL} from '../../constants/urlConstants';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getResultatList() {
    return this.httpClient.get(BASE_URL + 'resultats', this.options  );
    }
  }
