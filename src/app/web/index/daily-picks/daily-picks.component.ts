import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/model/Blogs';
import { theme } from 'src/app/model/Theme';
import { AjaxService } from 'src/app/common/service/ajax.service';
import { ThemeOnChangeService } from 'src/app/common/service/theme-on-change.service';


@Component({
  selector: 'app-daily-picks',
  templateUrl: './daily-picks.component.html',
  styleUrls: ['./daily-picks.component.scss']
})
export class DailyPicksComponent implements OnInit {
  blogs: Blogs[] = [];
  theme: theme = new theme;
  constructor(private ajax: AjaxService, private themeChange: ThemeOnChangeService) {
    this.themeChange.theme.subscribe((data: theme) => {
      this.theme = data;
    })
  }

  ngOnInit() {
    this.GetNotDeleteBlogs();
  }

  GetNotDeleteBlogs() {
    this.ajax.GetNotDeleteBlogsTop4().subscribe((data: Blogs[]) => {
      this.blogs = data;
    });
  }



}
