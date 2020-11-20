import { SysCatFormComponent } from './../sys-cat-form/sys-cat-form.component';
import { SysCatService } from './../../../core/services/sys-cat.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base-component/base-component.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DEFAULT_MODAL_OPTIONS, RESOURCE, ACTION_FORM } from '../../../core/app-config';
// import { SysCatService } from '../../../core/services/sys-cat.service';
// import { SysCatTypeService } from '../../../core/services/sys-cat-type.service';
import { Validators, FormGroup } from '@angular/forms';
// import { SysCatFormComponent } from '../sys-cat-form/sys-cat-form.component';
import { CommonUtils } from '../../../shared/service/common-utils.service';

@Component({
  selector: 'app-sys-cat-search',
  templateUrl: './sys-cat-search.component.html'
})
export class SysCatSearchComponent extends BaseComponent implements OnInit {

  public commonUtils =  CommonUtils;
  constructor(
    public actr: ActivatedRoute,
    public router: Router,
    private modalService: NgbModal,
    private sysCatService: SysCatService,
    private app: AppComponent
  ) {
    super(actr, RESOURCE.SYSCAT, ACTION_FORM.SEARCH);
    this.setMainService(sysCatService);
    this.formSearch = this.buildForm({}, {
      code: ['', [Validators.maxLength(50)]],
      name: ['', [Validators.maxLength(200)]],
    });
  }

  ngOnInit() {
    this.processSearch();
  }

  get f () {
    return this.formSearch.controls;
  }

  /**
   * prepare insert/update
   */
  // prepareSaveOrUpdate(item): void {
  //   if (item && item.sysCatId > 0) {
  //     this.sysCatService.findOne(item.sysCatId)
  //       .subscribe(res => {
  //         this.sysCatTypeService.findOne(res.data.sysCatTypeId)
  //           .subscribe(resSCType => {
  //             res.data.sysCatTypeName = resSCType.data.name;
  //             this.activeFormModal(this.modalService, SysCatFormComponent, res.data);
  //         });
  //       });
  //   } else {
  //     if (!this.formSearch.get('sysCatTypeId')) {
  //       this.app.warningMessage('', 'Vui lòng chọn nhóm danh mục');
  //       return;
  //     }
  //     this.sysCatTypeService.findOne(this.formSearch.get('sysCatTypeId').value)
  //       .subscribe(resSCType => {
  //         const data = {
  //           sysCatTypeId  : resSCType.data.sysCatTypeId,
  //           sysCatTypeName: resSCType.data.name
  //         };
  //         this.activeFormModal(this.modalService, SysCatFormComponent, data);
  //     });
  //   }
  // }


  prepareSaveOrUpdate(item: any): void {
    console.log('item: ', item)
    if (item && item > 0) {
      this.sysCatService.findOne(item).subscribe((res) => {
        console.log('res', res);
        this.activeFormModal(
          this.modalService,
          SysCatFormComponent,
          res.data
        );
      });
    } else {
      this.activeFormModal(this.modalService, SysCatFormComponent, null);
    }
  }
  processDelete(item) {
    if (item && item.sysCatId > 0) {
      // tslint:disable-next-line:max-line-length
      this.app.confirmDelete(null, () => {// on accepted
        this.sysCatService.deleteById(item.sysCatId)
        .subscribe(res => {
          if (this.sysCatService.requestIsSuccess(res)) {
            this.processSearch();
          }
        });
      }, () => {// on rejected
      });
    }
  }
}
