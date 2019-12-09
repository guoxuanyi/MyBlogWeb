import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { theme } from 'src/app/model/Theme';
import { Emit } from '../../../common/service/emit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: string[] = ['SIGN IN', 'SIGN UP'];
  theme: theme = new theme;
  page: number = 0;
  constructor(private commonEmit: Emit, private router: Router) { }

  ngOnInit(): void {
    this.themeInit();
    this.listenRouter();
  }

  themeInit(): void {
    this.theme.helpColor = this.commonEmit.saveTheme == null ? '#00cbb6' : this.commonEmit.saveTheme.helpColor;
    this.commonEmit.theme.subscribe((res: theme) => {
      this.theme = res;
    });
  }

  listenRouter() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        alert(event);
      }
    });
  }

  selectOptions(i): void {
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

  gotoIndex(): void {
    this.router.navigate(['home']);
  }


}
