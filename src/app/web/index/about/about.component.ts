import { Component, OnInit } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { GetEmit } from '../../../common/service/get-emit.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  theme: theme = new theme;
  constructor(private getEmit: GetEmit) {
    this.getEmit.theme.subscribe((data: theme) => {
      this.theme = data;
    });
  }

  ngOnInit() {
  }

}
