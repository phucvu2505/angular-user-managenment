import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysCatSearchComponent } from './sys-cat/sys-cat-search/sys-cat-search.component';
import { TransferImportComponent } from './transfer/transfer-import/transfer-import.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: 'welcome/:username',
    component: WelcomeComponent,
  },
  {
    path: 'user-search',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'transfer-search',
    loadChildren: () => import('./transfer/transfer.module').then(m => m.TransferModule)
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
  exports: [RouterModule]
})
export class TransferAppRoutingModule { }
