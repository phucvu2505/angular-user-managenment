import { OnInit, Component, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  @Input()
  public options: any;

  items: MenuItem[];
  home: MenuItem;

  constructor() {
    this.items = [];
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('change: ', changes)
    const options: SimpleChange = changes.options;
    if (options && options.currentValue) {
      this.init(options.currentValue);
    }
  }
  ngOnInit() {
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }
  init(data?: any) {
    if (data) {
      this.items = [];
      for (const item of data) {
        this.items.push(item);
      }
    }
  }
}
