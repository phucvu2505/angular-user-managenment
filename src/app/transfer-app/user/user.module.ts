import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  entryComponents: [UserFormComponent],
  declarations: [UserFormComponent, UserSearchComponent]
})
export class UserModule { }
