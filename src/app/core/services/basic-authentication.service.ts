import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HelperService } from 'src/app/shared/service/helper.service';
import { BasicService } from './basic.service';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'
export const CURRENT_USER = 'currentUser'

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService extends BasicService {
  constructor(public httpClient: HttpClient,
    public helperService: HelperService) {
    super('oauth', 'restUtt', httpClient, helperService);
  }

  excuteJWTAuthenticationService(username, password) {
    console.log('username: ' + username + ',password: ' +password);
    return this.httpClient.post<any>(
      `${this.serviceUrl}/authenticate`, { username, password }
    ).pipe(
      map(data => {
        console.log('dataToken', data);
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.jwt}`);
        let curUser = data.data;
        sessionStorage.setItem(CURRENT_USER, JSON.stringify(curUser));
        return data;
      })
    );
  }

  getUserInfo(){
    let userInfo = JSON.parse(sessionStorage.getItem(CURRENT_USER));
    return userInfo;
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem(TOKEN);
  }

  isUserLogin() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  isAdmin(){
    let userInfo = JSON.parse(sessionStorage.getItem(CURRENT_USER));
    if(userInfo.roleCode === 'admin'){
      return true;
    }
    return false;
  }

  isUser(){
    let userInfo = JSON.parse(sessionStorage.getItem(CURRENT_USER));
    if(userInfo.roleCode === 'user'){
      return true;
    }
    return false;
  }

  isAccounting(){
    let userInfo = JSON.parse(sessionStorage.getItem(CURRENT_USER));
    if(userInfo.roleCode === 'accounting'){
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(CURRENT_USER);
  }
}

export class BasicAuthenticationBean {
  constructor(public message: string) { }
}
