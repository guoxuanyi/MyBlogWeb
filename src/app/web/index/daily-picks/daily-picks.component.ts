import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/model/Blogs';
import { theme } from 'src/app/model/Theme';
import { AjaxService } from 'src/app/common/service/ajax.service';
import { Emit } from '../../../common/service/emit.service';


@Component({
  selector: 'app-daily-picks',
  templateUrl: './daily-picks.component.html',
  styleUrls: ['./daily-picks.component.scss']
})
export class DailyPicksComponent implements OnInit {
  blogs: Blogs[] = [];
  theme: theme = new theme;
  constructor(private ajax: AjaxService, private commonEmit: Emit) { }

  ngOnInit(): void {
    this.themeInit();
    this.loadFirstFourBlogs();
  }

  themeInit(): void {
    this.theme.bgColor = this.commonEmit.saveTheme == null ? '#42d4bd' : this.commonEmit.saveTheme.bgColor;
    this.commonEmit.theme.subscribe((res: theme) => {
      this.theme = res;
    });
  }

  loadFirstFourBlogs(): void {
    this.ajax.getNotDeleteBlogsTop4().subscribe((res: Blogs[]) => {
      this.blogs = res;
    });
  }
}
