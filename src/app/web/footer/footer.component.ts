import { Component, OnInit } from '@angular/core';
import { theme } from '../../model/Theme';
import { Emit } from '../../common/service/get-emit.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  theme: theme = new theme;
  constructor(private commonEmit: Emit) {
    this.commonEmit.theme.subscribe((data: theme) => {
      this.theme = data;
    });
  }

  ngOnInit() {
  }

}
