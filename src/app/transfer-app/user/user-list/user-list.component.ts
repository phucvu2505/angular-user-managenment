import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  errorMessage: string = '';
  users: object[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    this.userService.getUserList()
      .subscribe( data => {
        if (data && data.content) {
          this.users = data.content;
        } else {
          this.users = [];
        }
      },
      err => {
        this.errorMessage = err.error.message;
      });
  }


}
