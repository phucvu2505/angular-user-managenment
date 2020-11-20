import { BasicAuthenticationService } from 'src/app/core/services/basic-authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html'
})
export class LoginAuthComponent implements OnInit {

  error: string;
  isLoading: boolean;
  loginForm: FormGroup;
  invalidLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  get f(){
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.basicAuthenticationService.excuteJWTAuthenticationService(this.loginForm.controls.userName, this.loginForm.controls.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.loginForm.controls.userName]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
    );
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
