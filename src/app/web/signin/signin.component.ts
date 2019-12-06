import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../common/service/ajax.service';
import { ActivatedRoute } from '@angular/router';
import { theme } from '../../model/Theme';
import { Emit } from '../../common/service/get-emit.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  page: number = 0;
  theme: theme = new theme;
  isLoading: boolean = false;
  userName: string;
  passWord: string;
  constructor(private ajax: AjaxService,
    private routeInfo: ActivatedRoute,
    private commonEmit: Emit) { }

  ngOnInit() {
    this.EmitPage();
  }

  EmitPage(): void {
    this.page = this.routeInfo.snapshot.params["page"];
    this.commonEmit.emitPage.emit(this.page);
  }

  GetThemeEmit(): void {
    this.commonEmit.theme.subscribe((res: theme) => {
      this.theme = res;
    });
  }
  signIn(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    this.ajax.SignIn(this.userName, this.passWord).subscribe((res: boolean) => alert(res));
  }
}
