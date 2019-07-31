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
  return this.httpClient.get(BASE_URL + 'departements', this.options  );
  }
}
