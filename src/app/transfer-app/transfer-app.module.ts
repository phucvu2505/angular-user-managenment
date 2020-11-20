import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material-module';
import { TransferAppRoutingModule } from './transfer-app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TransferAppRoutingModule,
    MaterialModule
  ],
  providers: [
  ],
  entryComponents: [],
  declarations: []
})
export class TransferAppModule { }
