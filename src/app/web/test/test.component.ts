import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../common/service/ajax.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  users: IUser[] = [];
  userName: string;
  passWord: string;
  constructor(private ajax: AjaxService) { }

  ngOnInit() {
    this.GetAllUsers();
  }

  GetAllUsers() {
    this.ajax.GetAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  Login(userName, passWord) {
    this.userName = userName;
    this.passWord = passWord;
    this.ajax.Login(this.userName, this.passWord).subscribe(data => {
      alert(data)
    })
  }
}
