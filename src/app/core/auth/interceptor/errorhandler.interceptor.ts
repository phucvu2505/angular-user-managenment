// import { AppComponent } from './../../../app.component';
// import { Injectable } from '@angular/core';
// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
//
// @Injectable()
// export class ErrorHandlerInterceptor implements HttpInterceptor {
//   constructor( private app: AppComponent) {
//   }
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       tap(null, (err: HttpErrorResponse) => {
//         if (err && err.status >= 400 && err.status < 500 && err.message) {
//           if (err.error && err.error.message) {
//             this.app.errorMessage(err.status.toString(), err.error.parameters.message);
//             console.log(err.error.message);
//           }
//         }
//       })
//     );
//   }
// }
