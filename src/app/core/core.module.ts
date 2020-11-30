import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { WithCredentialsInterceptor } from './auth/interceptor/with-credential.interceptor';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule, SharedModule],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WithCredentialsInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
