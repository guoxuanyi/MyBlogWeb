import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../common/service/ajax.service';
import { EmitService } from '../../common/service/emit-service.service';

@Component({
  selector: 'app-daily-picks',
  templateUrl: './daily-picks.component.html',
  styleUrls: ['./daily-picks.component.scss']
})
export class DailyPicksComponent implements OnInit {
  blogs: IBlogs[] = [];
  theme: string;
  constructor(private ajax: AjaxService, private emitService: EmitService) { }

  ngOnInit() {
    this.GetNotDeleteBlogs();
    this.onChangeTheme();
  }

  GetNotDeleteBlogs() {
    this.ajax.GetNotDeleteBlogsTop4().subscribe(data => {
      this.blogs = data;
    });
  }

  onChangeTheme() {
    this.emitService.eventEmit.subscribe((data: string) => {
      this.theme = data;
    });
  }

}
