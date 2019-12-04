import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../common/service/ajax.service';
import { ActivatedRoute } from '@angular/router';
import { EmitService } from 'src/app/common/service/emit-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  page: number = 0;
  isLoading: boolean = false;
  userName: string;
  passWord: string;
  constructor(private ajax: AjaxService, private routeInfo: ActivatedRoute, private emitService: EmitService) { }

  ngOnInit() {
    this.EmitPage();
  }

  EmitPage(): void {
    this.page = this.routeInfo.snapshot.params["page"];
    this.emitService.emitPage.emit(this.page);
  }
  signIn(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    this.ajax.SignIn(this.userName, this.passWord).subscribe((res: boolean) => alert(res));
  }
}
