import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getOption() {
    const header = new HttpHeaders ;
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');

    return  {headers: header};
  }
}
