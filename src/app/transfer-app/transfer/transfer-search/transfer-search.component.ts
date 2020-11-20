import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component.component';
import { AppComponent } from 'src/app/app.component';
import { TransferFormComponent } from '../transfer-form/transfer-form.component';
import { ACTION_FORM, RESOURCE } from 'src/app/core/app-config';
import { BasicAuthenticationService } from 'src/app/core/services/basic-authentication.service';
import { TransferService } from 'src/app/core/services/transfer.service';
import { CommonUtils } from 'src/app/shared/service/common-utils.service';

@Component({
  selector: 'app-transfer-search',
  templateUrl: './transfer-search.component.html',
  styleUrls: ['./transfer-search.component.css']
})
export class TransferSearchComponent extends BaseComponent implements OnInit {
  resultList: any = {};
  selectedTransfers: any;
  constructor(
    public actr: ActivatedRoute,
    public router: Router,
    private transferService: TransferService,
    private modalService: NgbModal,
    private app: AppComponent,
    private basicAuthenticationService: BasicAuthenticationService
  ) {
    super(actr, RESOURCE.TRANSFER, ACTION_FORM.SEARCH);
    this.setMainService(transferService);
    this.listMenu.push({label: 'Quản lý giao dịch'});
    this.listMenu.push({label: 'Danh sách giao dịch'});
    this.formSearch = this.buildForm(
      {},
      {
        code: ['', [Validators.maxLength(50)]],
        keySearch: ['', [Validators.maxLength(200)]]
      }
    );
  }

  ngOnInit(): void {
    this.processSearch();
  }

  /**
   * @override processSearch
   * @param event
   */
  processSearch(event?): void {
    if (!CommonUtils.isValidForm(this.formSearch)) {
      return;
    }
    const params = this.formSearch ? this.formSearch.value : null;
    this.transferService.getTransferList(params, event).subscribe((res) => {
      this.resultList = res;
      console.log('transfers:', this.resultList);
    });
    if (!event) {
      if (this.dataTable) {
        this.dataTable.first = 0;
      }
    }
  }

  /**
   * @override processDelete
   * @param id
   */
  processDelete(id): void {
    if (this.basicAuthenticationService.isAdmin() || this.basicAuthenticationService.isAccounting()) {
      if (id && id > 0) {
        this.transferService.confirmDelete({
          messageCode: null,
          accept: () => {
            this.transferService.deleteById(id)
              .subscribe(res => {
                if (this.transferService.requestIsSuccess(res)) {
                  this.processSearch();
                }
              });
          }
        });
      }
    } else {
      this.app.warningMessage('Thông báo', 'Bạn không có quyền thực hiện chức năng này');
    }
  }

  get f() {
    return this.formSearch.controls;
  }

  /**
   * @function prepareSaveOrUpdate
   * @param item
   */
  prepareSaveOrUpdate(item: any): void {
    console.log('item: ', item)
    if (this.basicAuthenticationService.isAdmin() || this.basicAuthenticationService.isAccounting()) {
      if (item && item > 0) {
        this.transferService.findOne(item).subscribe((res) => {
          console.log('res', res);
          this.activeFormModal(
            this.modalService,
            TransferFormComponent,
            res.data
          );
        });
      } else {
        this.activeFormModal(this.modalService, TransferFormComponent, null);
      }
    } else {
      this.app.warningMessage('Thông báo', 'Bạn không có quyền thực hiện chức năng này');
    }
  }

  /**
   * @function duyetDien
   */
  duyenDien(): void {
    if (this.basicAuthenticationService.isAdmin()) {
      if (this.selectedTransfers != undefined) {
        this.app.confirmMessage(null, () => {// on accepted
          this.transferService.duyetLo(this.selectedTransfers)
            .subscribe(res => {
              if (this.transferService.requestIsSuccess(res)) {
                this.processSearch();
              }
            });
        }, () => {// on rejected
        });
      } else {
        this.app.warningMessage('Thông báo', 'Yêu cầu chọn ít nhất 1 giao dịch');
      }
    } else {
      this.app.warningMessage('Thông báo', 'Bạn không có quyền thực hiện chức năng này');
    }
  }

  /**
   * @function xoaDien
   */
  xoaDien(): void {
    console.log("selectedTransfers", this.selectedTransfers);
    if (this.basicAuthenticationService.isAdmin()) {
      if (this.selectedTransfers != undefined) {
        this.app.confirmMessage(null, () => {// on accepted
          this.transferService.xoaLo(this.selectedTransfers)
            .subscribe(res => {
              if (this.transferService.requestIsSuccess(res)) {
                this.processSearch();
              }
            });
        }, () => {// on rejected
        });
      } else {
        this.app.warningMessage('Thông báo', 'Yêu cầu chọn ít nhất 1 giao dịch');
      }
    } else {
      this.app.warningMessage('Thông báo', 'Bạn không có quyền thực hiện chức năng này');
    }
  }

  public exportData() {
    if (!CommonUtils.isValidForm(this.formSearch)) {
      return;
    } else {
      const params = this.formSearch.value;
      this.transferService.export(params).subscribe(res => {
        saveAs(res, 'transfer.xlsx');
      });
    }
  }

  public redirectImport() {
    this.router.navigate(['transfer-import']);
  }
}
