import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicService } from './basic.service';
import { HelperService } from 'src/app/shared/service/helper.service';
import { CommonUtils } from 'src/app/shared/service/common-utils.service';

const AUTH_API = 'http://localhost:8080/api/auth/';
@Injectable({
  providedIn: 'root',
})


export class UserService extends BasicService {
  constructor(
    public httpClient: HttpClient,
    public helperService: HelperService
  ) {
    super('ess', 'userInfo', httpClient, helperService);
  }

  public getUserList(data?: any, event?: any): Observable<any> {
    if (!event) {
      this.credentials = Object.assign({}, data);
    }

    const searchData = CommonUtils.convertData(this.credentials);
    if (event) {
      searchData._search = event;
    }
    const buildParams = CommonUtils.buildParams(searchData);
    const url = `${this.serviceUrl}/search-user?`;
    console.log('buildParams: ', buildParams)
    return this.getRequest(url, { params: buildParams });
  }

  public register(user): Observable<any>{
    return this.httpClient.post(AUTH_API + 'signup',{
      username: user.username,
      password: user.password
    });
  }
}
