import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/model/Blogs';
import { theme } from 'src/app/model/Theme';
import { AjaxService } from 'src/app/common/service/ajax.service';
import { Emit } from '../../../common/service/get-emit.service';


@Component({
  selector: 'app-daily-picks',
  templateUrl: './daily-picks.component.html',
  styleUrls: ['./daily-picks.component.scss']
})
export class DailyPicksComponent implements OnInit {
  blogs: Blogs[] = [];
  theme: theme = new theme;
  constructor(private ajax: AjaxService, private commonEmit: Emit) {
    this.theme.bgColor = this.commonEmit.saveTheme == null ? '#42d4bd' : this.commonEmit.saveTheme.bgColor;
    this.commonEmit.theme.subscribe((data: theme) => {
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
