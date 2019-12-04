import { Component, OnInit } from '@angular/core';
import { theme } from '../../model/Theme';
import { GetEmit } from '../../common/service/get-emit.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  theme: theme = new theme;
  constructor(private getEmit: GetEmit) {
    this.getEmit.theme.subscribe((data: theme) => {
      this.theme = data;
    });
  }

  ngOnInit() {
  }

}
