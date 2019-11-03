import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {DataService} from '../../shared/services/data.service';
import {NgForm} from '@angular/forms';

@Component ({
    templateUrl: 'sign-in.html'
})

export class SignInComponent implements OnInit{
    constructor(private authService: AuthService , private router: Router, private data: DataService) { }

  message = '';
  singleSelectOptions: any = [];
  onSubmit(form: NgForm) {
    // this.authService.logIn(form.value['login'], form.value['password']).subscribe((res: Response) => {
    //     if (res.status === 200) {
    //       this.data.setAuth(true);
    //       this.router.navigate(['dashboard']);
    //       console.log(res.status);
    //     }
    //   } , (erro) => {
    //     this.message = 'Opération échouée. Veuillez reessayer ';
    //     this.router.navigate(['authentication/sign-in']);
    //   }
    // );

  }
  OnSignIn() {
      this.data.setAuth(true);
      this.router.navigate(['/dashboard/']);
  }

  ngOnInit(): void {
  }

}
