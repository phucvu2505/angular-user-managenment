import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RESOURCE, ACTION_FORM } from 'src/app/core/app-config';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component.component';
import { AppComponent } from 'src/app/app.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { CommonUtils } from 'src/app/shared/service/common-utils.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent extends BaseComponent implements OnInit {
  resultList: any = {};
  listMenu = [
    {label: 'Quản lý người dùng'},
    {label: 'Danh sách người dùng'}
  ];
  constructor(
    public actr: ActivatedRoute,
    public router: Router,
    private userService: UserService,
    private modalService: NgbModal,
    private app: AppComponent
  ) {
    super(actr, RESOURCE.USER, ACTION_FORM.SEARCH);
    this.setMainService(userService);
    console.log('this.listMenu: ', this.listMenu)
    // this.listMenu.push({label: 'Quản lý người dùng'});
    // this.listMenu.push({label: 'Danh sách người dùng'});
    this.dataMenu = [];
    this.dataMenu = this.listMenu;
    console.log('pMenu user: ', this.dataMenu);
    this.formSearch = this.buildForm(
      {},
      {
        userCode: ['', [Validators.maxLength(50)]],
        fullName: ['', [Validators.maxLength(200)]],
        email:['', [Validators.maxLength(50)]],
        phoneNumber:['', [Validators.maxLength(50)]],
        keySearch: ['', [Validators.maxLength(200)]]
      }
    );
  }

  ngOnInit(): void {
    this.processSearch();
  }

  // ngAfterViewInit(): void {
  //   this.listMenu.push({label: 'Quản lý người dùng'});
  //   this.listMenu.push({label: 'Danh sách người dùng'});
  // }

  processSearch(event?): void {
    if (!CommonUtils.isValidForm(this.formSearch)) {
      return;
    }
  //   this.app.confirmMessage(null, () => {// on accepted
  //     alert('ok')
  //    }, () => {// on rejected
  //     alert('not ok')
  //  });
    const params = this.formSearch ? this.formSearch.value : null;
    this.userService.getUserList(params, event).subscribe((res) => {
      this.resultList = res;
    });
    if (!event) {
      if (this.dataTable) {
        this.dataTable.first = 0;
      }
    }
  }

  get f() {
    return this.formSearch.controls;
  }

  /**
   * prepare insert/update
   */
  prepareSaveOrUpdate(item: any): void {
    console.log('item: ', item)
    if (item && item > 0) {
      this.userService.findOne(item).subscribe((res) => {
        console.log('res', res);
        this.activeFormModal(
          this.modalService,
          UserFormComponent,
          res.data
        );
      });
    } else {
      this.activeFormModal(this.modalService, UserFormComponent, null);
    }
  }
}
