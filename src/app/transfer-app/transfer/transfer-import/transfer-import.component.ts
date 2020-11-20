import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component.component';
import { AppComponent } from 'src/app/app.component';
import { ACTION_FORM, RESOURCE } from 'src/app/core/app-config';
import { FileControl } from 'src/app/core/models/file.control';
import { TransferService } from 'src/app/core/services/transfer.service';
import { CommonUtils } from 'src/app/shared/service/common-utils.service';

@Component({
  selector: 'app-transfer-import',
  templateUrl: './transfer-import.component.html',
  styleUrls: ['./transfer-import.component.css']
})
export class TransferImportComponent extends BaseComponent implements OnInit {

  public formImport: FormGroup;
  public dataError: any;

  private formImportConfig =  {
  };

  constructor(
    public actr: ActivatedRoute,
    public router: Router,
    private transferService: TransferService,
    private app: AppComponent
  ) {
    super(actr, RESOURCE.TRANSFER, ACTION_FORM.IMPORT);
    this.formImport = this.buildForm({}, this.formImportConfig, ACTION_FORM.IMPORT);
    this.formImport.addControl('fileImport', new FileControl(null, Validators.required));
  }

  ngOnInit(): void {
  }

  get f() {
    return this.formImport.controls;
  }

  public redirectBack() {
    this.router.navigate(['transfer-search']);
  }

  public exportTemplate() {
    this.formImport.controls['fileImport'].clearValidators();
    this.formImport.controls['fileImport'].updateValueAndValidity();
    if (!CommonUtils.isValidForm(this.formImport)) {
      return;
    } else {
      const params = this.formImport.value;
      delete params['fileImport'];
      this.transferService.exportTemplate(params).subscribe(res => {
        saveAs(res, 'Transfer.xls');
      });
    }
  }

  processImport() {
    this.formImport.controls['fileImport'].updateValueAndValidity();
    if (!CommonUtils.isValidForm(this.formImport)) {
      return;
    }
    this.app.confirmMessage(null, () => {// on accepted
      this.transferService.processImport(this.formImport.value).subscribe(res => {
        if (!this.transferService.requestIsSuccess(res)) {
          this.dataError = res.data;
        } else {
          this.dataError = null;
          this.router.navigate(['transfer-search']);
        }
      });
    }, () => {
      // on rejected
    });
  }

}
