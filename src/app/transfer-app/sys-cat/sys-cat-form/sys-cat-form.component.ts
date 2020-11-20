import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../../shared/components/base-component/base-component.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../../../app.component';
import { RESOURCE, ACTION_FORM } from '../../../core/app-config';
import { CommonUtils } from '../../../shared/service/common-utils.service';
import { SysCatService } from '../../../core/services/sys-cat.service';


@Component({
  selector: 'app-sys-cat-form',
  templateUrl: './sys-cat-form.component.html'
})
export class SysCatFormComponent extends BaseComponent implements OnInit {

  formSave: FormGroup;
  formConfig = {
    sysCatId: [''],
    code: ['', [Validators.required, Validators.maxLength(50)]],
    name: ['', [Validators.required, Validators.maxLength(200)]],
    sysCatTypeName: [''],
    sysCatTypeId: [''],
    // status: [''],
    description: ['', [Validators.maxLength(4000)]],
    token: ['']
  };
  constructor( public actr: ActivatedRoute,
               public activeModal: NgbActiveModal,
               private formBuilder: FormBuilder,
               private sysCatService: SysCatService,
               private app: AppComponent
  ) {
    super(actr, RESOURCE.SYSCAT, ACTION_FORM.INSERT);
    this.formSave = this.buildForm({}, this.formConfig);
  }

  ngOnInit() {
  }

  /**
   * processSaveOrUpdate
   */
  processSaveOrUpdate() {
    if (!CommonUtils.isValidForm(this.formSave)) {
      return;
    }
    // this.formSave.get('token').setValue(window.sessionStorage.getItem('token'));
    this.app.confirmMessage(null, () => {// on accepted
      this.sysCatService.saveOrUpdate(this.formSave.value)
      .subscribe(res => {
        if (this.sysCatService.requestIsSuccess(res)) {
          this.activeModal.close(res);
        }
      });
     }, () => {// on rejected
   });
  }

  /****************** CAC HAM COMMON DUNG CHUNG ****/
  get f () {
    return this.formSave.controls;
  }
  /**
   * setFormValue
   * param data
   */
  public setFormValue(propertyConfigs: any, data?: any) {
    this.propertyConfigs = propertyConfigs;
    if (data && data.sysCatId > 0) {
      this.formSave = this.buildForm(data, this.formConfig, ACTION_FORM.UPDATE);
    } else {
      this.formSave = this.buildForm(data, this.formConfig, ACTION_FORM.INSERT);
    }
  }
}
