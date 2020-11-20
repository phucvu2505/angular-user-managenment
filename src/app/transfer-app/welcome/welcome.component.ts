import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/core/services/basic-authentication.service';
import { UserToken } from 'src/app/core/models/user-token.model';

@Component({
  selector: 'app-welcome',
  // templateUrl: './welcome.component.html',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = ''
  welcomeMessageFromService: string
  errorMessageFromService: string
  userInfo: UserToken;
  constructor(private route: ActivatedRoute,
    private basicAuthenticationService: BasicAuthenticationService
    ) {
      this.userInfo = basicAuthenticationService.getUserInfo();
    }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username']
  }

  // getWelcomeMessage() {
  //   this.service.excuteHelloWorldBeanService().subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //   );
  // }

  // getWelcomeMessageWithParameter() {
  //   this.service.excuteHelloWorldServiceWithPathVariable(this.username).subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error => this.handleErrorResponse(error)
  //   )
  // }

  // getErrorMessage() {
  //   this.service.excuteHelloWorldErrorService().subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error => this.handleErrorResponse(error)
  //   )
  // }

  handleSuccessfulResponse(response) {
    console.log(response)
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error) {
    console.log(error);
    this.errorMessageFromService = error.error.message
  }

}
