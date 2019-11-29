import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../common/service/ajax.service';

@Component({
  selector: 'app-daily-picks',
  templateUrl: './daily-picks.component.html',
  styleUrls: ['./daily-picks.component.scss']
})
export class DailyPicksComponent implements OnInit {
  blogs: IBlogs[] = [];
  constructor(private ajax: AjaxService) { }

  ngOnInit() {
    this.GetNotDeleteBlogs();
  }

  GetNotDeleteBlogs() {
    this.ajax.GetNotDeleteBlogsTop4().subscribe(data => {
      this.blogs = data;
    });
  }

}
