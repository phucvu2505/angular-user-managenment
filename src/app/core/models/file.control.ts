import { FormControl } from '@angular/forms';
export class FileAttachment {
  id: string;
  fileName: string;
  length: number;
  chunkSize: number;
  uploadDate: number;
  isTemp: boolean;
  file: any;
  target: any;
  errorKey: string;
  sysLanguageCode?: string;
  languageObj?: any;
}
export class FileControl extends FormControl {
  public fileAttachment: Array<FileAttachment>;
  public setFileAttachment(fileAttachment: any) {
    this.fileAttachment = fileAttachment;
  }
  public getFileAttachment(): Array<FileAttachment> {
    return this.fileAttachment;
  }
}
