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

    return this.httpClient.get(BASE_URL + 'fundings', this.options  );
  }
  getSourceFinancement(id){
    return this.httpClient.get(BASE_URL + 'fundings/' + id, this.options);
  }
  deleteSourceFinamcement(id) {
    return this.httpClient.delete(BASE_URL + 'administrator/remove-funding/' + id, this.options);
  }

  createSource(imputation_chapter: string, code: string, is_project: boolean, denomination: string, weight_project: number,   type_funding_id: number) {
    const data = {
      code: code,
      denomination: denomination,
      weight_project: weight_project,
      is_project: is_project,
      type_funding_id: type_funding_id,
      imputation_chapter: imputation_chapter
    };
    return this.httpClient.post(BASE_URL + 'administrator/create-funding', data, this.options);
  }

  update(code: string, denomination: string, weight_project: number, imputation_chapter: string, is_project: boolean, type_funding_id: number, id: number) {
    const data = {
      code: code,
      denomination: denomination,
      weight_project: weight_project,
      is_project: is_project,
      type_funding_id: type_funding_id,
      imputation_chapter: imputation_chapter
    };
    return this.httpClient.put(BASE_URL + 'administrator/update-funding/'  + id, data, this.options);
  }
}
