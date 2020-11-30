import { Component, OnInit } from '@angular/core';
import { UserToken } from 'src/app/core/models/user-token.model';
import { AuthenticationService } from './../../core/auth/authentication.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  userInfo: UserToken;
  constructor(public authenticationService: AuthenticationService) {
    this.userInfo = authenticationService.getUserInfo();
    console.log('userInfo: ', this.userInfo);
  }

  ngOnInit() {}
}
