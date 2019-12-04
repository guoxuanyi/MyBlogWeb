import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { theme } from 'src/app/model/Theme';
import { GetEmit } from '../../../common/service/get-emit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: string[] = ['SIGN IN', 'SIGN UP'];
  theme: theme = new theme;
  page: number = 0;
  constructor(private getEmit: GetEmit, private router: Router) { }

  ngOnInit() {
    this.GetThemeEmit();
    this.GetPageEmit();
  }

  selectOptions(i) {
    switch (i) {
      case 1:
        this.router.navigate(['/signIn', 3]);
        break;
      case 2:
        this.router.navigate(['/signUp', 3]);
        break;
      default:
        break;
    }
  }

  GetThemeEmit(): void {
    this.getEmit.theme.subscribe((data: theme) => {
      this.theme = data;
    });

  }
  GetPageEmit(): void {
    this.getEmit.page.subscribe((res: number) => {
      this.page = res;
      console.log(this.page);

    });
  }
}
