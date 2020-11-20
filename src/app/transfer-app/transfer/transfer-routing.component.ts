import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferSearchComponent } from './transfer-search/transfer-search.component';

const routes: Routes = [
  {
    path: '',
    component: TransferSearchComponent,
    pathMatch : 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
