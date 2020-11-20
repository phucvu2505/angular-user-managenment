import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserToken } from 'src/app/core/models/user-token.model';
import { BasicAuthenticationService } from 'src/app/core/services/basic-authentication.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent {

  userInfo: UserToken;

  constructor(
    public actr: ActivatedRoute,
    private userService: UserService,
    public router: Router,
    public basicAuthenticationService: BasicAuthenticationService
  ) {
    this.userInfo = basicAuthenticationService.getUserInfo();
  }

  public userInformation() {
    this.router.navigate(['/user-info']);
  }

  // public changePassword() {
  //   this.router.navigate(['/user-info/change-password']);
  // }

  // public logOut() {
  //   this.router.navigate(['/login']);
  //   Storage.clear();
  // }
}
