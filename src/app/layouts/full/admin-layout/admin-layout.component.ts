import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItem } from 'primeng/api';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component.component';
import { AuthenticationService } from './../../../core/auth/authentication.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent
  extends BaseComponent
  implements OnInit, OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;
  pItems: MenuItem[];
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public authenticationService: AuthenticationService
  ) {
    super();
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.listMenu.push({ label: 'Trang chủ' });
    this.dataMenu = this.listMenu;

    console.log('pMenu: ', this.dataMenu);
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}
}
