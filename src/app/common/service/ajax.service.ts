import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { version } from '../../model/BlogVersion';
import { User } from 'src/app/model/User';
import { Blogs } from 'src/app/model/Blogs';
import { SingInUser } from '../../model/SignInUser';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AjaxService extends RequestService {
  version: string;

  constructor(http: HttpClient) {
    super(http);
    this.version = version;
  }

  getAllUsers(): Observable<User[]> {
    return this.get<User[]>(`api/${this.version}/User/users`);
  }

  getAllUsersNotFreeze(): Observable<User[]> {
    return this.get<User[]>(`api/${this.version}/User/users-unFreeze`);
  }

  getUserByUserId(userId: string): Observable<User> {
    return this.get<User>(`api/${this.version}/User/users/`, { 'userId': userId });
  }

  signIn(userName: string, userPassWord: string): Observable<string> {
    let data: SingInUser = new SingInUser;
    data.userName = userName;
    data.userPassWord = userPassWord;
    return this.post<string>(`api/${this.version}/User/signIn`, data);
  }

  siginUp(user: User): Observable<boolean> {
    return this.post<boolean>(`api/${this.version}/User/signUp`, user);
  }

  freezeUser(userId: string): Observable<number> {
    return this.get<number>(`api/${this.version}/User/users-freeze/`, { 'userId': userId });
  }

  unFreezeUser(userId: string): Observable<number> {
    return this.get<number>(`api/${this.version}/User/users-unFreeze/`, { 'userId': userId });
  }

  updateUser(user: User): Observable<number> {
    return this.put<number>(`api/${this.version}/User/update`, user);
  }

  getNotDeleteBlogs(): Observable<Blogs[]> {
    return this.get<Blogs[]>(`api/${this.version}/Blog/undelete-blogs`);
  }

  getNotDeleteBlogsTop4(): Observable<Blogs[]> {
    return this.get<Blogs[]>(`api/${this.version}/Blog/top4-undelete-blogs`);
  }

  updateBlogLikeCount(blogId: string): Observable<number> {
    return this.get<number>(`api/${this.version}/Blog/blogLikeCount-update/`, { 'blogId': blogId });
  }

  getUserIcon(allUserId: object): Observable<object> {
    return this.get<object>(`api/${this.version}/User/userIcon/`, { 'allUserId': JSON.stringify(allUserId) });
  }

  getBlogByUserId(userId: string): Observable<Blogs[]> {
    return this.get<Blogs[]>(`api/${this.version}/Blog/blogs`, { 'userId': userId });
  }
}
