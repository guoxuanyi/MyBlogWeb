import { Component, OnInit } from '@angular/core';
import { theme } from '../../model/Theme';
import { ThemeOnChangeService } from '../../common/service/theme-on-change.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  theme: theme = new theme;
  constructor(private themeChange: ThemeOnChangeService) {
    this.themeChange.theme.subscribe((data: theme) => {
      this.theme = data;
    });
  }

  ngOnInit() {
  }

}
