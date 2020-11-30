import { BankOperatorMenuItems } from './../../menu-items/menu-items-bank-operator';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { CustomerMenuItems } from './../../menu-items/menu-items-customer';
import {
  AuthenticationService,
  UserLogin,
} from './../../../core/auth/authentication.service';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css'],
})
export class PanelMenuComponent {
  items: MenuItem[];
  username = '';
  userInfo = {
    fullName: '',
    password: '',
    username: '',
  };
  constructor(
    public authenticationService: AuthenticationService,
    public customerMenuItems: CustomerMenuItems,
    public bankOperatorMenuItems: BankOperatorMenuItems
  ) {
    this.username = this.authenticationService.getAuthenticatedUser();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Trang chủ',
        icon: 'pi pi-home pi-file',
        routerLink: '/welcome/' + this.username,
      }
    ];
    this.userInfo = this.authenticationService.getUserInfo();
    if ((this.userInfo.username = 'admin')) {
      for (const item of this.bankOperatorMenuItems.getMenuItem()) {
        this.items.push(item);
      }
    } else {
      for (const item of this.customerMenuItems.getMenuItem()) {
        this.items.push(item);
      }
    }
  }
}
