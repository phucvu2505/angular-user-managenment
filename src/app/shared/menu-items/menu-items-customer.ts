import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const CUSTOMER_MENUITEMS = [
  {
    label: 'Quản lý người dùng',
    icon: 'pi pi-fw pi-users',
    items: [
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-list',
        routerLink: '/user-search',
      },
      {
        label: 'Đổi mật khẩu',
        icon: 'pi pi-fw pi-list',
        routerLink: '',
      },
      {
        label: 'Danh sách tài khoản ngân hàng',
        icon: 'pi pi-fw pi-list',
        routerLink: '',
      },
    ],
  },
  {
    label: 'Quản lý giao dịch',
    icon: 'pi pi-fw pi-chart-line',
    items: [
      {
        label: 'Nạp tiền',
        icon: 'pi pi-fw pi-list',
        routerLink: '',
      },
      {
        label: 'Chuyển tiền',
        icon: 'pi pi-fw pi-list',
        routerLink: '',
      },
      {
        label: 'Chuyển tiền',
        icon: 'pi pi-fw pi-list',
        routerLink: '',
      },
      {
        label: 'Lịch sử giao dịch',
        icon: 'pi pi-fw pi-list',
        routerLink: '',
      },
    ],
  },
];

@Injectable()
export class CustomerMenuItems {
  getMenuItem(): MenuItem[] {
    return CUSTOMER_MENUITEMS;
  }
}
