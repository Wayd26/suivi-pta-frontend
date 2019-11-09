import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {DataService} from '../../shared/services/data.service';
import {NgForm} from '@angular/forms';
import { TokenResponse } from 'src/app/models/token.model';
import { CookieService } from 'ngx-cookie-service';

@Component ({
    templateUrl: 'sign-in.html'
})

export class SignInComponent implements OnInit{
    constructor(private cookieService: CookieService, private authService: AuthService , private router: Router, private data: DataService) { }

  message = '';
  singleSelectOptions: any = [];
  onSubmit(form: NgForm) {
    this.authService.logIn(form.value['login'], form.value['password']).subscribe((res: TokenResponse) => {
           console.log(res);
          this.data.setAuth(true);
          this.data.setToken(res.access_token);
          this.cookieService.set( 'token', res.access_token, 0.0006944 );
          this.router.navigate(['dashboard']);

      } , (erro) => {
        console.log(erro);
        this.message = 'Login ou Mot de passe incorrect';
        this.router.navigate(['authentication/sign-in']);
      }
    );

  }
  OnSignIn() {
      this.data.setAuth(true);
      this.router.navigate(['/dashboard/']);
  }

  ngOnInit(): void {
  }

}
