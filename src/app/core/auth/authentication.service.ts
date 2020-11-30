import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HelperService } from './../../shared/service/helper.service';
import { BasicService } from './../services/basic.service';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';
export const CURRENT_USER = 'currentUser';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BasicService {
  constructor(
    public httpClient: HttpClient,
    public helperService: HelperService
  ) {
    super('oauth', 'restUtt', httpClient, helperService);
  }

  // fake authen
  authenticate(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem(TOKEN, `Bearer fakeToken`);
      const curUser = {
        username: 'admin',
        password: 'admin',
        fullName: 'Admin',
      };
      sessionStorage.setItem(CURRENT_USER, JSON.stringify(curUser));
      sessionStorage.setItem(AUTHENTICATED_USER, curUser.username);
      return curUser;
    }
    return null;
  }

  // authenticate(username: string, password: string) {
  //
  //   const userLogin = new UserLogin();
  //   userLogin.username = username;
  //   userLogin.password = password;
  //
  //   return this.httpClient.post<any>(
  //     `${this.serviceUrl}`, userLogin, {observe: 'body'}
  //   ).pipe(
  //     map(respone => {
  //       if (respone && !respone.error && respone.data && respone.otherInformation && respone.otherInformation.token) {
  //         sessionStorage.setItem(TOKEN, `Bearer ${respone.otherInformation.token}`);
  //         const curUser = respone.data;
  //         sessionStorage.setItem(CURRENT_USER, JSON.stringify(curUser));
  //         sessionStorage.setItem(AUTHENTICATED_USER, curUser.userName);
  //         return respone;
  //       }
  //     })
  //   );
  // }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getUserInfo() {
    const userInfo = JSON.parse(sessionStorage.getItem(CURRENT_USER));
    return userInfo;
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem(TOKEN);
  }

  isUserLogin() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(CURRENT_USER);
  }
}

export class UserLogin {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }
}
