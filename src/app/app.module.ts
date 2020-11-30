import { CoreModule } from './core/core.module';
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
import {CardModule} from 'primeng/card';

import { MaterialModule } from './material-module';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app-routing.module';
import { AdminLayoutComponent } from './layouts/full/admin-layout/admin-layout.component';
import { AppSidebarMenuComponent } from './layouts/full/sidebar-menu/sidebar-menu.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { FooterComponent } from './layouts/full/footer/footer.component';
import { SpinnerComponent } from './layouts/full/spinner/spinner.component';
import { LoginComponent } from './core/auth/login/login.component';
import { WelcomeComponent } from './../app/layouts/welcome/welcome.component';
import { ErrorComponent } from './layouts/full/error/error.component';
import { AppComponent } from './app.component';
import { SysCatSearchComponent } from './transfer-app/sys-cat/sys-cat-search/sys-cat-search.component';
import { SysCatFormComponent } from './transfer-app/sys-cat/sys-cat-form/sys-cat-form.component';
import { UserInfoComponent } from './transfer-app/user-info/user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ErrorComponent,
    WelcomeComponent,
    AdminLayoutComponent,
    AppHeaderComponent,
    AppSidebarMenuComponent,
    SpinnerComponent,
    UserInfoComponent,
    SysCatSearchComponent,
    SysCatFormComponent,

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
    ScrollPanelModule,
    CoreModule,
    CardModule
  ],
  providers: [AppComponent, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
