import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BasicService } from './basic.service';
import { HelperService } from 'src/app/shared/service/helper.service';
import { CommonUtils } from 'src/app/shared/service/common-utils.service';

@Injectable({
  providedIn: 'root',
})
export class TransferService extends BasicService {
  constructor(
    public httpClient: HttpClient,
    public helperService: HelperService
  ) {
    super('ess', 'transferInfo', httpClient, helperService);
  }

  public getTransferList(data?: any, event?: any): Observable<any> {
    if (!event) {
      this.credentials = Object.assign({}, data);
    }

    const searchData = CommonUtils.convertData(this.credentials);
    if (event) {
      searchData._search = event;
    }
    const buildParams = CommonUtils.buildParams(searchData);
    const url = `${this.serviceUrl}/search-transfer?`;
    console.log('buildParams: ', buildParams)
    return this.getRequest(url, { params: buildParams });
  }

  public duyetLo(data?: any): Observable<any>{
    const url = `${this.serviceUrl}/duyet-dien`;
    return this.httpClient.post(url, CommonUtils.convertData(data))
    .pipe(
      tap(
        res => this.helperService.APP_TOAST_MESSAGE.next(res),
        error => {
          this.helperService.APP_TOAST_MESSAGE.next(error);
        }
      )
    );
  }

  public xoaLo(data?: any): Observable<any>{
    const url = `${this.serviceUrl}/xoa-dien`;
    return this.httpClient.post(url, CommonUtils.convertData(data))
    .pipe(
      tap(
        res => this.helperService.APP_TOAST_MESSAGE.next(res),
        error => {
          this.helperService.APP_TOAST_MESSAGE.next(error);
        }
      )
    );
  }

  public export(data: any): Observable<any> {
    const url = `${this.serviceUrl}/export`;
    return this.getRequest(url, {params: data, responseType: 'blob'});
  }

  public exportTemplate(data: any): Observable<any> {
    const url = `${this.serviceUrl}/export-template`;
    return this.getRequest(url, {params: data, responseType: 'blob'});
  }

  public processImport(data: any): Observable<any> {
    const url = `${this.serviceUrl}/import`;
    const formdata = CommonUtils.convertFormFile(data);
    return this.postRequest(url, formdata);
  }
}
