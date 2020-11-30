import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const BANK_OPERATOR_MENUITEMS = [
  {
    label: 'Quản lý người dùng',
    icon: 'pi pi-fw pi-users',
    items: [
      {
        label: 'Danh sách người dùng',
        icon: 'pi pi-fw pi-list',
        routerLink: 'user-list',
      },
      {
        label: 'Tạo tài khoản',
        icon: 'pi pi-fw pi-list',
        routerLink: 'user-create',
      },
    ],
  },
  {
    label: 'Quản lý giao dịch',
    icon: 'pi pi-fw pi-chart-line',
    items: [
      {
        label: 'Lịch sử giao dịch',
        icon: 'pi pi-fw pi-list',
        routerLink: 'history-transfer',
      },
    ],
  },
];

@Injectable()
export class BankOperatorMenuItems {
  getMenuItem(): MenuItem[] {
    return BANK_OPERATOR_MENUITEMS;
  }
}
