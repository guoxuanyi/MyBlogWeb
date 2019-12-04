import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { AjaxService } from '../../common/service/ajax.service';
import { Blogs } from 'src/app/model/Blogs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmitService } from '../../common/service/emit-service.service';
const count = 5;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page: number = 0;
  blogs: Blogs[] = [];
  onLoading: boolean = false;
  constructor(private ajax: AjaxService, private routeInfo: ActivatedRoute, private emitService: EmitService) { }

  ngOnInit(): void {
    this.EmitPage();
    this.loadData();
  }

  EmitPage(): void {
    this.page = this.routeInfo.snapshot.params["page"];
    this.emitService.emitPage.emit(this.page);
  }

  loadData(): void {
    this.ajax.GetNotDeleteBlogs().subscribe((res: Blogs[]) => {
      this.blogs = res;
      setTimeout(() => {
        this.onLoading = !this.onLoading;
      }, 1000);
    });
  }
}
