import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import {CardModule} from 'primeng/card';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCreateComponent } from './user-create/user-create.component';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    CardModule,
    TableModule,
    PaginatorModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  entryComponents: [UserFormComponent],
  declarations: [UserFormComponent, UserSearchComponent, UserCreateComponent, UserListComponent]
})
export class UserModule { }
