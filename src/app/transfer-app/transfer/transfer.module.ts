import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material-module';
import { TransferImportComponent } from './transfer-import/transfer-import.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { TransferSearchComponent } from './transfer-search/transfer-search.component';
import { TransferRoutingModule } from './transfer-routing.component';
import { UserCreateComponent } from '../user/user-create/user-create.component';
import { HistoryTransferManagementComponent } from './history-transfer-management/history-transfer-management.component';

@NgModule({
  imports: [
    CommonModule,
    TransferRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [TransferSearchComponent, TransferFormComponent, TransferImportComponent, HistoryTransferManagementComponent]
})
export class TransferModule { }
