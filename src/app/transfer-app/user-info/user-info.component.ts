import { Component, OnInit } from '@angular/core';
import { UserToken } from 'src/app/core/models/user-token.model';
import { BasicAuthenticationService } from 'src/app/core/services/basic-authentication.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo: UserToken;
  constructor(public basicAuthenticationService: BasicAuthenticationService) {
    this.userInfo = basicAuthenticationService.getUserInfo();
    console.log('userInfo: ', this.userInfo)
  }

  ngOnInit() {
  }

}
