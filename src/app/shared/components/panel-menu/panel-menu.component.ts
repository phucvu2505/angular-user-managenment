import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuItems } from '../../menu-items/menu-items';
import { AuthenticationService } from './../../../core/auth/authentication.service';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css'],
})
export class PanelMenuComponent {
  items: MenuItem[];
  username = '';
  constructor(
    public authenticationService: AuthenticationService,
    public menuItems: MenuItems
  ) {
    this.username = this.authenticationService.getAuthenticatedUser();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Trang chủ',
        icon: 'pi pi-home pi-file',
        routerLink: '/welcome/' + this.username,
      },
    ];
    for (const item of this.menuItems.getMenuitem()) {
      this.items.push(item);
    }
  }
}
