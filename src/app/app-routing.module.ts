import { UserSearchComponent } from './transfer-app/user/user-search/user-search.component';
import { SysCatSearchComponent } from './transfer-app/sys-cat/sys-cat-search/sys-cat-search.component';

import { AdminLayoutComponent } from './layouts/full/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './core/services/route-guard.service';
import { LoginComponent } from './transfer-app/login/login.component';
import { LogoutComponent } from './transfer-app/logout/logout.component';

export const AppRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: 'sys-cat', component: SysCatSearchComponent },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    pathMatch: 'prefix',
    canActivate: [RouteGuardService],
    children: [
      {
        path: '',
        // loadChildren: './transfer-app/transfer-app.module#TransferAppModule'
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
