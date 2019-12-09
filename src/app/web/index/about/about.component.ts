import { Component, OnInit } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { Emit } from '../../../common/service/emit.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  theme: theme = new theme;
  constructor(private commonEmit: Emit) { }

  ngOnInit(): void {
    this.themeInit();
  }

  themeInit(): void {
    this.theme.bgColor = this.commonEmit.saveTheme == null ? '#42d4bd' : this.commonEmit.saveTheme.bgColor;
    this.commonEmit.theme.subscribe((res: theme) => {
      this.theme = res;
    });
  }
}
