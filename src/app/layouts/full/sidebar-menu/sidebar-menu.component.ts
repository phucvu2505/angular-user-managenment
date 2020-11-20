import { OnInit, OnDestroy, Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { BasicAuthenticationService } from 'src/app/core/services/basic-authentication.service';
import { MenuItems } from 'src/app/shared/menu-items/menu-items';
import { UserToken } from 'src/app/core/models/user-token.model';


@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class AppSidebarMenuComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  items = [];
  userInfo: UserToken;
  username = '';
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef
    , media: MediaMatcher
    , public router: Router
    , public menuItems: MenuItems
    , public basicAuthenticationService: BasicAuthenticationService
    , public httpClient: HttpClient
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.userInfo = basicAuthenticationService.getUserInfo();
    console.log("userInfo: ", this.userInfo)
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public userInformation() {
    this.router.navigate(['/user-info']);
  }

  public changePassword() {
    // this.router.navigate(['/user-info/change-password']);
  }

  public logOut() {
    // this.router.navigate(['/login']);
    // Storage.clear();
  }
  fileExists(url: string): boolean {
    // return false
    var filename = url;

    var request = new XMLHttpRequest();
    request.open('HEAD', filename, false);
    request.send();
    const response = request.status;
    request.abort();
    return (response != 200) ? false : true;
  }

  checkFileExist(url: string): boolean {
    this.httpClient.get(url).subscribe(() => {
    }, (err) => {
      if (err.status === 404) {
        return false;
      }
    });
    return true;
  }
}
