import { Injectable } from '@angular/core';
import {UtilsService} from './utils.service';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class SourceFinancementService {
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getSourceFinancementList() {

    return this.httpClient.get(BASE_URL + 'sources_financements', this.options  );
  }
}
