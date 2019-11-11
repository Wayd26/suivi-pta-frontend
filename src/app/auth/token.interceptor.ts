import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {  constructor(public cookie: CookieService) {}
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  request = request.clone({
    setHeaders: {
      'Authorization': `Bearer ${this.cookie.get('token')}`
    }
  });
  console.log(request);
  return next.handle(request);
}
}
