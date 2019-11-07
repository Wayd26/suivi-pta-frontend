import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BASE_URL } from 'src/app/constants/urlConstants';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) { }
  logIn(username,password) {
    const data = {
      grant_type: 'client_credentials',
      client_id: 2,
      client_secret: 'QnOSnZuTTegkLJSHOhwIBuNVQJb6t1elj39WGIhE',
      username:username,
      password: password
    };
    return this.httpClient.put(BASE_URL + 'oauth/token?', data, this.utilsService.getOption());
  }

  // logIn(login, password) {
  //   this.header.append('Content-Type', 'application/json');
  //   this.header.append('Access-Control-Allow-Origin', '*');
  //   this.header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
  //   this.header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  //   this.options = {headers: this.header};
  //   const userLogin = {
  //     login: login,
  //     password: password
  //   };
  //   return this.http.post(this.uri + 'login', userLogin, this.options);
  // }

  signIn() {
    return  new Promise(

      (resolve, reject) => {

        setTimeout(

          () => {

            this.isAuth = true;

            resolve(true);

          }, 2000

        );

      }

    );
  }

  getIsAuth(): boolean {
    return this.isAuth;
  }

  setIsAuth(auth: boolean) {
    this.isAuth = auth;
  }

}