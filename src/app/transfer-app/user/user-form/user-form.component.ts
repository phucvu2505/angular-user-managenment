import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component.component';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/core/services/user.service';
import { RESOURCE, ACTION_FORM } from 'src/app/core/app-config';
import { CommonUtils } from 'src/app/shared/service/common-utils.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent extends BaseComponent implements OnInit {
  formSave: FormGroup;
  formConfig = {
    userId: [''],
    userName: ['', [Validators.required, Validators.maxLength(50)]],
    roleCode: ['', [Validators.required]],
    roleName: ['', [Validators.required]],
    fullName: ['', [Validators.required, Validators.maxLength(200)]],
    userCode: ['', [Validators.required, Validators.maxLength(50)]],
    gender: ['', [Validators.required]],
    email: ['', [Validators.maxLength(50)]],
    phoneNumber: ['', [Validators.maxLength(50)]],
    dateOfBirth: ['', [Validators.required]],
    imageUrl: [''],
    password: ['', [Validators.required, Validators.maxLength(200)]],
  };

  constructor(
    public actr: ActivatedRoute,
    public activeModal: NgbActiveModal,
    public userService: UserService,
    private app: AppComponent
  ) {
    super(actr, RESOURCE.USER, ACTION_FORM.INSERT);
    this.formSave = this.buildForm({}, this.formConfig);
  }

  ngOnInit(): void {}

  get f () {
    return this.formSave.controls;
  }

  /**
   * setFormValue
   * param data
   */
  public setFormValue(propertyConfigs: any, data?: any) {
    this.propertyConfigs = propertyConfigs;
    if (data && data.userId > 0) {
      this.formSave = this.buildForm(data, this.formConfig);
    }
  }

  /**
   * processSaveOrUpdate
   */
  processSaveOrUpdate() {
    if (!CommonUtils.isValidForm(this.formSave)) {
      return;
    }
    this.userService.confirmSave({
      messageCode: null,
      accept:() =>{
        console.log("this.formSave.value", this.formSave.value);
        this.userService.saveOrUpdate(this.formSave.value).subscribe(res => {
          if (this.userService.requestIsSuccess(res)) {
            this.activeModal.close(res);
          }
        });
      }
    })
  }
}
