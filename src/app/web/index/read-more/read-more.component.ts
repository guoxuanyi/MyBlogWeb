import { Component, OnInit, Input } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { Router, NavigationEnd } from '@angular/router';
import { Emit } from '../../../common/service/get-emit.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  theme: theme = new theme;
  constructor(private commomEmit: Emit, private router: Router) {
    this.theme.bgColor = this.commomEmit.saveTheme == null ? '#42d4bd' : this.commomEmit.saveTheme.bgColor;
    this.theme.helpColor = this.commomEmit.saveTheme == null ? '#00cbb6' : this.commomEmit.saveTheme.helpColor;
  }

  ngOnInit(): void {
    this.getEmitTheme();
  }

  getEmitTheme(): void {
    this.commomEmit.theme.subscribe((data: theme) => {
      this.theme = data;
    })
  }

  intoHome(): void {
    this.router.navigate(['/home', 2]);
  }
}
