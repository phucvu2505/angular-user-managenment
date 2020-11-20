import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html'
})
export class AppTabMenuComponent {

    items: MenuItem[];

    activeItem: MenuItem;

    ngOnInit() {
        this.items = [
            {label: 'Thông tin chung', icon: 'pi pi-fw pi-home'},
            {label: 'Quản lý hồ sơ', icon: 'pi pi-fw pi-file'},
            {label: 'Quản lý tài nguyên', icon: 'pi pi-fw pi-pencil'},
            {label: 'Quản lý quyền người dùng', icon: 'pi pi-fw pi-file'},
            {label: 'Quản lý cấu hình', icon: 'pi pi-fw pi-cog'},
        ];

        this.activeItem = this.items[0];
    }
}
