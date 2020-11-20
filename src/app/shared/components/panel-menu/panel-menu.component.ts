import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BasicAuthenticationService } from 'src/app/core/services/basic-authentication.service';
import { MenuItems } from '../../menu-items/menu-items';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css']
})
export class PanelMenuComponent {

  items: MenuItem[];
  username = '';
  constructor( public basicAuthenticationService: BasicAuthenticationService
            , public menuItems: MenuItems
  ) {
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Trang chủ',
        icon:'pi pi-home pi-file',
        routerLink : '/welcome/'+this.username,
      }
    ];
    for (const item of this.menuItems.getMenuitem()) {
      this.items.push(item);
    }
  }
}
