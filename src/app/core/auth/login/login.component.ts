import { CommonUtils } from './../../../shared/service/common-utils.service';
import { FormGroup, Validators } from '@angular/forms';
import { ACTION_FORM } from './../../app-config';
import { BaseComponent } from './../../../shared/components/base-component/base-component.component';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseComponent implements OnInit {
  formLogin: FormGroup;
  formConfig = {
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  };

  // Router
  // Angular.giveMeRouter
  // Dependency Injection
  constructor(
    public actr: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
    super(actr, ACTION_FORM.SEARCH);
    this.setMainService(authenticationService);
    this.formLogin = this.buildForm({}, this.formConfig);
  }

  ngOnInit(): void {}

  get f() {
    return this.formLogin.controls;
  }

  login() {
    console.log('login vao day');
    if (!CommonUtils.isValidForm(this.formLogin)) {
      return;
    }
    const userAuthen = this.authenticationService.authenticate(
      this.formLogin.controls['userName'].value,
      this.formLogin.controls['password'].value
    );

    if (userAuthen) {
      this.router.navigate(['/']);
    } else {
      alert('Đăng nhập thất bại');
    }
  }
}
