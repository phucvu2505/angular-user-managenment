import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TabMenuModule} from 'primeng/tabmenu';
import {ChartModule} from 'primeng/chart';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AppTabMenuComponent } from './components/tab-menu/tab-menu.component';
import { PieChartDemo } from './components/pie-chart/pie-chart.component';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';
import { MenuItems } from './menu-items/menu-items';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { SelectFilterComponent } from './components/select-filter/select-filter.component';
import { FileChoserComponent } from './components/file-choser/file-choser.component';
@NgModule({
  declarations: [
    DatePickerComponent,
    ControlMessagesComponent,
    TableFooterComponent,
    SelectFilterComponent,
    PanelMenuComponent,
    PieChartDemo,
    AppTabMenuComponent,
    FileChoserComponent,
    BreadcrumbComponent
  ],
  imports: [
    ConfirmDialogModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TableModule,
    PaginatorModule,
    NgbModule,
    RadioButtonModule,
    DropdownModule,
    ScrollPanelModule,
    PanelMenuModule,
    ChartModule,
    TabMenuModule,
    BreadcrumbModule
  ],
  providers: [ConfirmationService, MenuItems],
  exports: [
    ConfirmDialogModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TableModule,
    PaginatorModule,
    RadioButtonModule,
    DropdownModule,
    ScrollPanelModule,
    PanelMenuModule,
    ChartModule,
    TabMenuModule,
    BreadcrumbModule,
    
    PanelMenuComponent,
    PieChartDemo,
    AppTabMenuComponent,
    BreadcrumbComponent,
    DatePickerComponent,
    ControlMessagesComponent,
    TableFooterComponent,
    SelectFilterComponent,
    FileChoserComponent,
  ],
})
export class SharedModule {}
