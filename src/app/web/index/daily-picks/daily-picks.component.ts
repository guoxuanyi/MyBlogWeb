import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/model/Blogs';
import { theme } from 'src/app/model/Theme';
import { AjaxService } from 'src/app/common/service/ajax.service';
import { GetEmit } from '../../../common/service/get-emit.service';


@Component({
  selector: 'app-daily-picks',
  templateUrl: './daily-picks.component.html',
  styleUrls: ['./daily-picks.component.scss']
})
export class DailyPicksComponent implements OnInit {
  blogs: Blogs[] = [];
  theme: theme = new theme;
  constructor(private ajax: AjaxService, private getEmit: GetEmit) {
    this.getEmit.theme.subscribe((data: theme) => {
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
