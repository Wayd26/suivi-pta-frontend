import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {DataService} from './data.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authServicce: AuthService, private router: Router, private dataService: DataService,
              private cookie: CookieService) { }

  canActivate( route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('auth ' + this.cookie.check('auth'));
    console.log(this.router.url);
    if (!this.cookie.check('auth')) {

      this.router.navigate(['/authentication/sign-in']);
      return false;
    }
    return true;
  }
}
