import { Component, OnInit } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { ThemeOnChangeService } from 'src/app/common/service/theme-on-change.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  theme: theme = new theme;
  constructor(private themeChange: ThemeOnChangeService) {
    this.themeChange.theme.subscribe((data: theme) => {
      this.theme = data;
    });
  }

  ngOnInit() {
  }

}
