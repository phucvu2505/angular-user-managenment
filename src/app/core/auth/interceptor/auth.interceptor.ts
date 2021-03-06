import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {AuthenticationService} from '../authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const basicAuthHeaderString = this.authenticationService.getAuthenticatedToken();
    const username = this.authenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
