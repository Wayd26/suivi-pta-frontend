import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import {element} from 'protractor';

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

  getElementId(data, selectData) {
    let id = '';
    data.map((elements) => {
      if (elements['label'] === selectData) {
        id = elements['code'];
      }
    });
    return id;
  }
}
