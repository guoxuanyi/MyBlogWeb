import { Component, OnInit } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { Emit } from '../../../common/service/get-emit.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  theme: theme = new theme;
  constructor(private commonEmit: Emit) {
    this.theme.bgColor = this.commonEmit.saveTheme == null ? '#42d4bd' : this.commonEmit.saveTheme.bgColor;
    this.commonEmit.theme.subscribe((data: theme) => {
      this.theme = data;
    });
  }

  ngOnInit() {
  }

}
