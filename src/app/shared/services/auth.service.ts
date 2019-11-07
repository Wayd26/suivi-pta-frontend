import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  uri = 'http://timuxx.com/api_timux/api/v1/';
  constructor(private http: HttpClient) { }
  header = new HttpHeaders();
  options = {};

  logIn(login, password) {
    this.header.append('Content-Type', 'application/json');
    this.header.append('Access-Control-Allow-Origin', '*');
    this.header.append('Access-Control-Allow-Headers', 'Origin,X-Requested-Width, Content-Type, Accept, Authorization');
    this.header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    this.options = {headers: this.header};
    const userLogin = {
      login: login,
      password: password
    };
    return this.http.post(this.uri + 'login', userLogin, this.options);
  }

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
