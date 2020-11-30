import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/core/services/transfer.service';

@Component({
  selector: 'app-history-transfer-management',
  templateUrl: './history-transfer-management.component.html',
  styleUrls: ['./history-transfer-management.component.css']
})
export class HistoryTransferManagementComponent implements OnInit {

  transfers : any [];
  errorMessage: string = '';
  KeySearch;
  Transaction_code

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.getTransferList();
  }

  getTransferList(){
    this.transferService.getTransferList()
    .subscribe( data => {
      if (data && data.content) {
        this.transfers = data.content;
      } else {
        this.transfers = [];
      }
    },
    err => {
      this.errorMessage = err.error.message;
    });
  }
  processSearch(): void{

  }
}
