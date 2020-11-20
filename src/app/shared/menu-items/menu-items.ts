import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  {
    label: 'Quản lý người dùng',
    icon: 'pi pi-fw pi-users',
    items: [
      {
        label: 'Danh sách người dùng',
        icon: 'pi pi-fw pi-list',
        routerLink: '/user-search'
      }
    ]
  },
  {
    label: 'Quản lý giao dịch',
    icon: 'pi pi-fw pi-chart-line',
    items: [
      {
        label: 'Danh sách giao dịch',
        icon: 'pi pi-fw pi-list',
        routerLink: '/transfer-search'
      }
    ]
  },
  {
    label: 'Quản lý hệ thống',
    icon: 'pi pi-fw pi-cog',
    items: [
      {
        label: 'Quản lý file',
        icon: 'pi pi-fw pi-file',
        routerLink: '/sys-cat'
      },
      {
        label: 'Quản lý tham số dùng chung',
        icon: 'pi pi-fw pi-folder',
        routerLink: '/transfer-search'
      }
    ]
  }
]

@Injectable()
export class MenuItems {
  getMenuitem(): MenuItem[] {
    return MENUITEMS;
  }
}
