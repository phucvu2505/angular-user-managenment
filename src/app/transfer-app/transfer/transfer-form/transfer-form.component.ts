import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatStepper } from '@angular/material/stepper';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component.component';
import { AppComponent } from 'src/app/app.component';
import { RESOURCE, ACTION_FORM } from 'src/app/core/app-config';
import { TransferService } from 'src/app/core/services/transfer.service';
import { CommonUtils } from 'src/app/shared/service/common-utils.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css'],
})
export class TransferFormComponent extends BaseComponent implements OnInit {
  isLinear = false;
  lineError = '';
  newDate = new Date();
  formSave: FormGroup;
  secondFormGroup: FormGroup;
  sourceAccountView = 19034888556012;
  formConfig = {
    transferId: [''],
    code: ['', [Validators.required, Validators.maxLength(100)]],
    beneficiaryBank: ['', [Validators.required, Validators.maxLength(100)]],
    beneficiaryName: ['', [Validators.required, Validators.maxLength(100)]],
    sourceAccount: [''],
    targetAccount: ['', [Validators.required]],
    comment: [''],
    amount: ['', [Validators.required]],
  };

  bankList = [
    { code: 'Oceanbank', name: 'Ngân hàng Đại Dương' },
    { code: 'GPBank', name: 'Ngân hàng Dầu Khí Toàn Cầu' },
    { code: 'Agribank', name: 'Ngân hàng Nông nghiệp và Phát triển Nông thôn VN' },
    { code: 'ACB', name: 'Ngân hàng Á Châu' },
    { code: 'VIB', name: 'Ngân hàng Quốc tế VIB' },
    { code: 'VietBank', name: 'Việt Nam Thương Tín' },
    { code: 'Eximbank', name: 'Xuất Nhập khẩu Việt Nam' },
    { code: 'Sacombank', name: 'Sài Gòn Thương Tín' },
    { code: 'VietCapitalBank', name: 'Ngân hàng Bản Việt' },
    { code: 'DongA Bank', name: 'Ngân hàng thương mại cổ phần Đông Á' },
    { code: 'Nam A Bank', name: 'Ngân hàng thương mại cổ phần Nam Á' },
    { code: 'Saigonbank', name: 'Sài Gòn Công Thương' },
    { code: 'TPBank', name: 'Ngân hàng Tiên Phong' },
    { code: 'BacABank', name: 'Ngân hàng Bắc Á' },
    { code: 'Techcombank', name: 'Kỹ Thương Việt Nam' },
    { code: 'VPBank', name: 'Việt Nam Thịnh Vượng' },
    { code: 'MBBank', name: 'Ngân hàng Quân Đội' },
    { code: 'Vietcombank', name: 'Ngoại thương Việt Nam' },
    { code: 'VietinBank', name: 'Công Thương Việt Nam' },
    { code: 'BIDV', name: 'Đầu tư và Phát triển Việt Nam' },
    { code: 'SeABank', name: 'Ngân hàng Đông Nam Á' },
    { code: 'MSB', name: '	Hàng Hải Việt Nam' },
    { code: 'VietABank', name: 'Việt Á' },
    { code: 'BaoVietBank', name: 'Bảo Việt' },
    { code: 'PG Bank', name: 'Xăng dầu Petrolimex' },
    { code: 'Shinhan Bank', name: 'Ngân hàng TNHH MTV Shinhan Việt Nam' },
    { code: 'Public Bank', name: 'Ngân hàng Public Bank Việt Nam' },
    { code: 'HSBC', name: 'Ngân hàng TNHH một thành viên HSBC (Việt Nam)' },
    { code: 'Woori Bank', name: 'Ngân hàng Woori Bank tại Việt Nam' },
    { code: 'Standard Chartered', name: 'Ngân hàng Standard Chartered' },
    { code: 'Hong Leong Bank', name: 'Ngân hàng Hong Leong Việt Nam' },
    { code: 'CIMB Bank', name: 'Ngân hàng CIMB Việt Nam' },
    { code: 'Citibank', name: '	Ngân hàng Citibank, Chi nhánh Việt Nam' }
  ]

  constructor(
    public actr: ActivatedRoute,
    public activeModal: NgbActiveModal,
    public transferService: TransferService,
    private app: AppComponent,
    private formBuilder: FormBuilder
  ) {
    super(actr, RESOURCE.TRANSFER, ACTION_FORM.SEARCH);
    this.setMainService(transferService);
    this.formSave = this.buildForm({}, this.formConfig);
    this.formSave.controls['sourceAccount'].setValue(this.sourceAccountView);
  }

  ngOnInit(): void {
    this.secondFormGroup = this.formBuilder.group({
      softToken: ['', Validators.required],
    });

  }

  get f() {
    return this.formSave.controls;
  }

  /**
   * @function setFormValue
   * @param propertyConfigs 
   * @param data 
   */
  public setFormValue(propertyConfigs: any, data?: any) {
    this.propertyConfigs = propertyConfigs;
    if (data && data.transferId > 0) {
      this.formSave = this.buildForm(data, this.formConfig);
    }
  }

  /**
   * @function goForward
   * @param stepper 
   */
  goForward(stepper: MatStepper) {
    if (!CommonUtils.isValidForm(this.formSave)) {
      return;
    }
    stepper.next();
  }

  /**
   * @function goBack
   * @param stepper 
   */
  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  /**
   * @function reset
   * @param stepper 
   */
  reset(stepper: MatStepper) {
    stepper.reset();
    this.formSave.controls['sourceAccount'].setValue(this.sourceAccountView);
  }

  end() {
    this.activeModal.close();
    this.processSearch();
  }


  /**
   * @function processSaveOrUpdate
   */
  processSaveOrUpdate(stepper: MatStepper): void {
    let softToken = this.secondFormGroup.controls['softToken'].value;
    console.log('softToken', softToken);

    if (softToken === '101010') {
      if (!CommonUtils.isValidForm(this.formSave)) {
        return;
      }
      this.transferService.confirmSave({
        messageCode: null,
        accept: () => {
          console.log("this.formSave.value", this.formSave.value);
          this.transferService.saveOrUpdate(this.formSave.value).subscribe(res => {
            if (this.transferService.requestIsSuccess(res)) {
              stepper.next();
            }
          })
        }
      })
    } else {
      this.lineError = 'Mã xác thực sai';
    }
  }

}
