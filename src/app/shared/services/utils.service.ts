import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import {element} from 'protractor';
import swal from 'sweetalert2';
import { DataService } from './data.service';
import { CookieService } from 'ngx-cookie-service';
import {StructureActivite} from '../../models/activite.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private data: DataService, private cookieService: CookieService) { }

  getOption() {
    const header = new HttpHeaders ;
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    header.append('Authorization', 'Bearer ' + this.data.getToken() );
    console.log( this.cookieService.get('token'));
    console.log( this.data.getToken());
    console.log(header);

    return  {headers: header};
  }

  getElementId(data, selectData) {
    console.log(data);
    console.log(selectData);
    let id = '';
    data.map((elements) => {
      if (elements['label'] === selectData) {
        id = elements['code'];
        console.log(id);
      }
    });
    return id;
  }
  getDate(year, month, day) {
    console.log(month);
    return new Date(year, month, day);
  }
  changeDateFornat(date: Date) {
    const current_datetime = date;
    console.log(current_datetime);
    console.log(current_datetime.getFullYear());
    console.log(current_datetime.getMonth());
    console.log(current_datetime.getDate());
    const  moth = current_datetime.getMonth() < 10 ? '0' + current_datetime.getMonth() : current_datetime.getMonth()
    return  current_datetime.getFullYear() + '-' + moth + '-' + current_datetime.getDate();
  }

  dateToString(date: Date) {
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString() ;
    const yyyy = date.getFullYear().toString();
    if (+dd < 10) {
      dd = '0' + dd ;
    }
    if (+mm < 10) {
      mm = '0' + mm ;
    }
    return yyyy + '-' + mm + '-' + dd ;
}

  getElementByType(type, table: StructureActivite []) {
    return table.find((str) => str.type === type);
  }

  getIdData(data, keys ) {
    // console.log(data);
   const tab = data.find(function (e) { return e['rel'] === keys ; })['href'].split('/');
   // console.log(tab);
    return tab[tab.length - 1].toString();
  }
  getPickerFormat(date: String) {
    const dateFinRealSplit = date.split('-');
    return {year: +dateFinRealSplit[0], month: +dateFinRealSplit[1], day: +dateFinRealSplit[2]};
  }

  notifAjout_OK() {return swal('Succes !', 'Ajout effectué !', 'success'); }

  notifModif_OK() {return swal('Succes !', 'Modification effectuée !', 'success'); }

  notifAjout_Error() {return swal('Echec !', 'Ajout Echoué', 'error'); }

  notifModif_Error() {return swal('Echec !', 'Modification Echouée', 'error'); }

  notifSupprImpo() {return swal('Echec !', 'Suppression Impossible', 'error');
}
}
