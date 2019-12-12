import { Component, OnInit, Renderer2 } from '@angular/core';
import { AjaxService } from '../../common/service/ajax.service';
import { Blogs } from 'src/app/model/Blogs';
import { ActivatedRoute } from '@angular/router';
import { Emit } from '../../common/service/emit.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page: number = 0;
  blogs: Blogs[] = [];
  onLoading: boolean = false;
  likeColor: string;
  users: User[] = [];

  constructor(
    private ajax: AjaxService,
    private routeInfo: ActivatedRoute,
    private commonEmit: Emit,
    private re: Renderer2
  ) { }

  ngOnInit(): void {
    this.emitPage();
    this.loadUsers();
    if (this.users != []) {
      this.loadBlogs();
    }
  }

  emitPage(): void {
    this.page = this.routeInfo.snapshot.params["page"];
    this.commonEmit.emitPage.emit(this.page);
  }

  loadUsers(): void {
    this.ajax.getAllUsersNotFreeze().subscribe((res: User[]) => {
      this.users = res;
    });
  }

  loadBlogs(): void {
    this.ajax.getNotDeleteBlogs().subscribe((res: Blogs[]) => {
      this.blogs = res;
      setTimeout(() => {
        this.onLoading = !this.onLoading;
      }, 1000);
    });
  }

  likeBlog(data: Blogs, i: number) {
    data.blogLikeCount += 1;
    var like = this.re.selectRootElement(`#i${i}`, true);
    this.re.setStyle(like, 'color', 'red');
    data.blogLikeCountColor = 'red';
    data.blogLikeCountColor === null ? 'red' : data.blogLikeCountColor;
    this.ajax.updateBlogLikeCount(data.blogId).subscribe();
  }

  getUserIcon(): void {
    let userIdList: string[] = [];
    this.users.forEach(u => { userIdList.push(u.userId) });
    let allUserId: object = { 'allUserId': userIdList };
    this.ajax.getUserIcon(allUserId).subscribe((res: string[]) => {
      console.log(res);
    });

  }
}
