import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { theme } from 'src/app/model/Theme';
import { ThemeOnChangeService } from 'src/app/common/service/theme-on-change.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: string[] = ['HOME', 'SIGN IN', 'SIGN UP', 'CONTACT', 'ABOUT'];
  theme: theme = new theme;
  constructor(private themeChange: ThemeOnChangeService, private router: Router) {
    this.themeChange.theme.subscribe((data: theme) => {
      this.theme = data;
    });
  }

  ngOnInit() {
  }

  selectOptions(i) {
    alert(i)
    switch (i) {
      case 1:
        this.router.navigate(['/home'])
        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;

      default:
        break;
    }
  }
}
