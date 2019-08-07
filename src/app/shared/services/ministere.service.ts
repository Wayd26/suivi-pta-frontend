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

    return this.httpClient.get(BASE_URL + 'ministeres', this.options  );
  }

  // createMinistere(code, denomination){
  //   const data = {
  //     code : code,
  //     denomination : denomination
  //   }
  //   return this.httpClient.post(BASE_URL + )
  // }
}
