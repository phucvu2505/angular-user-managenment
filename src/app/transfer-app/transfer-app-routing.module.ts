import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferImportComponent } from './transfer/transfer-import/transfer-import.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: 'user-search',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'transfer-search',
    loadChildren: () =>
      import('./transfer/transfer.module').then((m) => m.TransferModule),
  },
  {
    path: 'transfer-import',
    component: TransferImportComponent,
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferAppRoutingModule {}
