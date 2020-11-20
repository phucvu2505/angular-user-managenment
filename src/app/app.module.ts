import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

import { MaterialModule } from './material-module';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app-routing.module';
import { AdminLayoutComponent } from './layouts/full/admin-layout/admin-layout.component';
import { AppSidebarMenuComponent } from './layouts/full/sidebar-menu/sidebar-menu.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { FooterComponent } from './layouts/full/footer/footer.component';
import { SpinnerComponent } from './layouts/full/spinner/spinner.component';
import { LoginComponent } from './transfer-app/login/login.component';
import { LogoutComponent } from './transfer-app/logout/logout.component';
import { LoginAuthComponent } from './transfer-app/login-auth/login-auth.component';
import { ErrorComponent } from './layouts/full/error/error.component';
import { WelcomeComponent } from './transfer-app/welcome/welcome.component';
import { AppComponent } from './app.component';
import { SysCatSearchComponent } from './transfer-app/sys-cat/sys-cat-search/sys-cat-search.component';
import { SysCatFormComponent } from './transfer-app/sys-cat/sys-cat-form/sys-cat-form.component';
import { UserInfoComponent } from './transfer-app/user-info/user-info.component';
import { HttpIntercepterBasicAuthService } from './core/services/http/http-intercepter-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginAuthComponent,
    LogoutComponent,
    FooterComponent,
    ErrorComponent,
    WelcomeComponent,
    AdminLayoutComponent,
    AppHeaderComponent,
    AppSidebarMenuComponent,
    SpinnerComponent,
    UserInfoComponent,
    SysCatSearchComponent,
    SysCatFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes),
    ScrollPanelModule
  ],
  providers: [AppComponent, MessageService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpIntercepterBasicAuthService,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
