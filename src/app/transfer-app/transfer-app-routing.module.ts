import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryTransferManagementComponent } from './transfer/history-transfer-management/history-transfer-management.component';
import { TransferImportComponent } from './transfer/transfer-import/transfer-import.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

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
  {
    path: 'user-create',
    component: UserCreateComponent,
  },
  {
    path: 'history-transfer',
    component: HistoryTransferManagementComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferAppRoutingModule {}
