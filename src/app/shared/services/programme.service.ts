import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { UtilsService } from './utils.service';
import { BASE_URL } from 'src/app/constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  options = this.utilsService.getOption();

  getProgrammeList() {
    const header = new HttpHeaders ;
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.httpClient.get(BASE_URL + 'programmes', this.options  );
  }
  deleteProgramme(id) {
    return this.httpClient.delete(BASE_URL + 'administrateurs/2/programmes/' + id, this.options);
  }
  getProgramme(id) {
    return this.httpClient.get(BASE_URL + 'programmes/' + id, this.options);
  }
  createProgramme(code: string, libelle: string, poids: number, exercice_id: number) {
    const data = {
      code: code,
      libelle: libelle,
      poids: poids,
      exercice_id: exercice_id
    };
    return this.httpClient.post(BASE_URL + 'administrateurs/2/programmes', data, this.options);
  }

  update(code: string, libelle: string, poids: number, exercice_id: number, id: number) {
    const data = {
      code: code,
      libelle: libelle,
      poids: poids,
      exercice_id: exercice_id
    };
    return this.httpClient.put(BASE_URL + 'administrateurs/2/programmes/' + id, data, this.options);
  }
}
