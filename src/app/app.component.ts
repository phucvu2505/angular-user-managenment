import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HelperService } from './shared/service/helper.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MessageService ]
})
export class AppComponent {
  title = 'angular-theme-primeng';
  public blocked = false;
  constructor(
    public helperService: HelperService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.helperService.APP_TOAST_MESSAGE.subscribe((data) => {
      this.processReturnMessage(data);
    });
    if (!this.helperService.APP_CONFIRM_DELETE.getValue()) {
      this.helperService.APP_CONFIRM_DELETE.subscribe((data) => {
        if (data && data['accept']) {
          this.confirmDelete(data['messageCode'], data['accept']);
        }
      });
    }
    if (!this.helperService.APP_CONFIRM_SAVE.getValue()) {
      this.helperService.APP_CONFIRM_SAVE.subscribe((data) => {
        if (data && data['accept']) {
          this.confirmSave(data['messageCode'], data['accept']);
        }
      });
    }
    this.helperService.APP_SHOW_PROCESSING.subscribe((isProcessing) =>
      this.isProcessing(isProcessing)
    );
  }

  public getConfirmationService(): ConfirmationService {
    return this.confirmationService;
  }

  /**
   * process return message
   * param serviceResponse
   */
  public processReturnMessage(serviceResponse: any) {
    if (!serviceResponse) {
      return;
    }
    if (serviceResponse.status === 500 || serviceResponse.status === 0) {
      this.errorMessage('haveError');
      return;
    }
    if (serviceResponse.code) {
      this.toastMessage(
        serviceResponse.type,
        serviceResponse.code,
        serviceResponse.message
      );
      return;
    }
  }

  /**
   * confirmMessage
   */
  confirmMessage(messageCode: string, accept: Function, reject?: Function) {
    const message = 'Bạn có muốn lưu thông tin?';
    const header = 'Xác nhận';
    return this.confirmationService.confirm({
      message: message,
      header: header,
      icon: 'pi pi-exclamation-triangle',
      accept: accept,
      reject: reject,
    });
  }

  /**
   * confirmMessage
   */
  confirmMessageError(
    messageCode: string,
    accept: Function,
    reject: Function,
    valueError?: any
  ) {
    const message = valueError + ' ' + 'Bạn có muốn lưu thông tin?';
    const header = 'Xác nhận';
    return this.confirmationService.confirm({
      message: message,
      header: header,
      icon: 'pi pi-exclamation-triangle',
      accept: accept,
      reject: reject,
    });
  }

  /**
   * confirmDelete
   */
  confirmDelete(messageCode: string, accept: Function, reject?: Function) {
    if (!accept) {
      return;
    }
    if (!reject) {
      reject = () => {
        return false;
      };
    }
    let message;
    if (messageCode) {
      message = messageCode;
    } else {
      message = 'Bạn có chắc chắn xóa bản ghi?';
    }
    const header = 'Xác nhận xóa';
    return this.confirmationService.confirm({
      message: message,
      header: header,
      icon: 'pi pi-info-circle',
      accept: accept,
      reject: reject,
    });
  }

   /**
   * confirmSave
   */
  confirmSave(messageCode: string, accept: Function, reject?: Function) {
    if (!accept) {
      return;
    }
    if (!reject) {
      reject = () => {
        return false;
      };
    }
    let message;
    if (messageCode) {
      message = messageCode;
    } else {
      message = 'Bạn có muốn lưu thông tin?';
    }
    const header = 'Xác nhận';
    return this.confirmationService.confirm({
      message: message,
      header: header,
      icon: 'pi pi-exclamation-triangle',
      accept: accept,
      reject: reject,
    });
  }

  public isProcessing(isProcessing: boolean) {
    if (this.blocked && !isProcessing) {
      setTimeout(() => {
        this.blocked = isProcessing;
        this.updateViewChange();
      }, 500);
    } else if (!this.blocked && isProcessing) {
      this.blocked = isProcessing;
      this.updateViewChange();
    }
  }

  /**
   * successMessage
   * param errorType
   * param errorCode
   */
  successMessage(code: string, message?: string) {
    this.toastMessage('SUCCESS', code, message);
  }
  /**
   * errorMessage
   * param errorType
   * param errorCode
   */
  errorMessage(code: string, message?: string) {
    this.toastMessage('ERROR', code, message);
  }
  /**
   * warningMessage
   * param errorType
   * param errorCode
   */
  warningMessage(code: string, message?: string) {
    this.toastMessage('WARNING', code, message);
  }

  /**
   * toastMessage
   * param severity
   * param errorType
   * param errorCode
   */
  public toastMessage(severity: string, code: string, message?: string) {
    let detail;
    message = severity === 'CONFIRM' ? null : message;
    severity = severity === 'CONFIRM' ? 'WARNING' : severity;
    if (!message) {
      detail = `${severity}`;
    } else {
      detail = `${message}`;
    }
    severity = severity === 'WARNING' ? 'WARN' : severity;
    const summary = 'Thông báo';
    this.messageService.add({
      severity: severity.toLowerCase(),
      summary: summary,
      detail: detail,
    });
  }

  private updateViewChange() {
    const progressSpinnerCheck = document.getElementById('progressSpinnerCheck');
    if (progressSpinnerCheck) {
      document.getElementById('progressSpinnerCheck').className = this.blocked ? 'progressing' : '';
    }
  }
}
