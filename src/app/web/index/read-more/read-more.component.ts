import { Component, OnInit, Input } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { Router } from '@angular/router';
import { Emit } from '../../../common/service/emit.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  theme: theme = new theme;
  constructor(private commomEmit: Emit, private router: Router) { }

  ngOnInit(): void {
    this.themeInit();
  }

  themeInit(): void {
    this.theme.bgColor = this.commomEmit.saveTheme == null ? '#42d4bd' : this.commomEmit.saveTheme.bgColor;
    this.theme.helpColor = this.commomEmit.saveTheme == null ? '#00cbb6' : this.commomEmit.saveTheme.helpColor;
    this.commomEmit.theme.subscribe((res: theme) => {
      this.theme = res;
    })
  }

  intoHome(): void {
    this.router.navigate(['/home', 2]);
  }
}
