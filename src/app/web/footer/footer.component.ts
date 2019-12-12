import { Component, OnInit } from '@angular/core';
import { theme } from '../../model/Theme';
import { Emit } from 'src/app/common/service/emit.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  theme: theme = new theme;
  constructor(private commonEmit: Emit) { }

  ngOnInit(): void {
    this.themeInit();
  }

  themeInit(): void {
    this.theme.helpColor = this.commonEmit.saveTheme == null ? '#00cbb6' : this.commonEmit.saveTheme.helpColor;
    this.commonEmit.theme.subscribe((res: theme) => {
      this.theme = res;
    });
  }
}
