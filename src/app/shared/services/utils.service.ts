import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {element} from 'protractor';
import swal from 'sweetalert2';
import { BASE_URL } from 'src/app/constants/urlConstants';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private httpClient: HttpClient, private data: DataService) { }

  getOption() {
    const header = new HttpHeaders ;
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    header.append('Authorization', 'Bearer ' + this.data.getToken );

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
    return new Date(year, month, day);
  }
  changeDateFornat(date: Date) {
    const current_datetime = date;
    return  current_datetime.getFullYear() + '-' + (current_datetime.getMonth()) + '-' + current_datetime.getDate();
  }

  getIdData(data, keys ) {
    console.log(data);
   const tab = data.find(function (e) { return e['rel'] === keys ; })['href'].split('/');
   console.log(tab);
    return tab[tab.length - 1].toString();
  }

  getToken(username,password) {
    const data = {
      grant_type: 'client_credentials',
      client_id: 2,
      client_secret: 'QnOSnZuTTegkLJSHOhwIBuNVQJb6t1elj39WGIhE',
      username:username,
      password: password
    };
    return this.httpClient.put(BASE_URL + 'oauth/token?', data, this.getOption());
  }

  notifAjout_OK(){return swal('Succes !', 'Ajout effectué !', 'success');}

  notifModif_OK(){return swal('Succes !', 'Modification effectuée !', 'success');}

  notifAjout_Error(msg: string){return swal('Echec !', msg, 'error');}

  notifModif_Error(msg: string){return swal('Echec !', msg, 'error');}

  confirm_Delete(id: number){
  //   swal({
  //     title: 'Attention !',
  //     text: 'Etes-vous sûr de vouloir effectuer cette suppression ? ',
  //     type: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#DD6B55',
  //     confirmButtonText: 'Oui, Supprimer !',
  //     cancelButtonText: 'Non, Annuler !',
  //   }).then(function() {
  //     swal(
  //       "Booyah!"
  //     );
  //   })
  // }

    swal({
      title: 'Attention !',
      text: 'Etes-vous sûr de vouloir effectuer cette suppression ? ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprimer !',
      cancelButtonText: 'Non, Annuler !',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false
    }).then(function () {
      swal('Deleted!', 'Your file has been deleted.', 'success'
      );
    }, function (dismiss) {

      if (dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }
}
