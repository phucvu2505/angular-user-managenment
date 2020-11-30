import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class WithCredentialsInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headerss = request.headers;
    headerss.append('Access-Control-Allow-Origin', '*');
    request = request.clone({
      withCredentials: true,
      headers: headerss
    });
    return next.handle(request);
  }
}
