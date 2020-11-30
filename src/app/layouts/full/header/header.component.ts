import { AuthenticationService } from './../../../core/auth/authentication.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserToken } from 'src/app/core/models/user-token.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class AppHeaderComponent {
  userInfo: UserToken;

  constructor(
    public actr: ActivatedRoute,
    private userService: UserService,
    public router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.userInfo = authenticationService.getUserInfo();
  }

  public userInformation() {
    this.router.navigate(['/user-info']);
  }
}
