import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './core/auth/route-guard.service';
import { AdminLayoutComponent } from './layouts/full/admin-layout/admin-layout.component';
import { LoginComponent } from 'src/app/core/auth/login/login.component';
import { SysCatSearchComponent } from './transfer-app/sys-cat/sys-cat-search/sys-cat-search.component';
import { WelcomeComponent } from 'src/app/layouts/welcome/welcome.component';

export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sys-cat', component: SysCatSearchComponent },
  {
    path: 'logout',
    component: LoginComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    pathMatch: 'prefix',
    canActivate: [RouteGuardService],
    children: [
      { path: '', component: WelcomeComponent },
      {
        path: '',
        loadChildren: () =>
          import('./transfer-app/transfer-app.module').then(
            (m) => m.TransferAppModule
          ),
      },
    ],
  },
  // {path: 'user-info', component: UserInfoComponent, canActivate: [RouteGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload' })],
  // imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
