import { OnInit, Component } from '@angular/core';
import { AjaxService } from '../../common/service/ajax.service';
import { theme } from '../../model/Theme';
import { Router } from '@angular/router';

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

  constructor(private ajax: AjaxService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    this.ajax.signIn(this.userName, this.passWord).subscribe((res: any) => {
      if (res === "User signin") {
        this.router.navigate(['home', 3]);
      }
    });
  }
}
