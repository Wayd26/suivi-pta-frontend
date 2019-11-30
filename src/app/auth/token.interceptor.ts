import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {  constructor(public cookie: CookieService, private router: Router) {}
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  if (request.url.indexOf('/authentication/sign-in') !== -1) {
    if (!this.cookie.check('auth')) {
      this.router.navigate(['/authentication/sign-in']);
    } else {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.cookie.get('token')}`
        }
      });
      console.log(request);
      return next.handle(request);
    }
  } else {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.cookie.get('token')}`
        }
      });
      console.log(request);
      return next.handle(request);
    }
}
}
