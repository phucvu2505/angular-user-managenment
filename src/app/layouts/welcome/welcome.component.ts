import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserToken } from 'src/app/core/models/user-token.model';
import { AuthenticationService } from './../../core/auth/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  username = '';
  welcomeMessageFromService: string;
  errorMessageFromService: string;
  userInfo: UserToken;
  constructor(
    private route: ActivatedRoute,
    public authenticationService: AuthenticationService
  ) {
    this.userInfo = authenticationService.getUserInfo();
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    console.log(error);
    this.errorMessageFromService = error.error.message;
  }
}
