import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { version } from '../../model/BlogVersion';
import { User } from 'src/app/model/User';
import { Blogs } from 'src/app/model/Blogs';
import { SingInUser } from '../../model/SignInUser';

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
    return this.get<User>(`api/${this.version}/User/users/`, userId);
  }

  signIn(userName: string, userPassWord: string): Observable<boolean> {
    let data: SingInUser = new SingInUser;
    data.userName = userName;
    data.userPassWord = userPassWord;
    return this.post<boolean>(`api/${this.version}/User/login`, data);
  }

  siginUp(user: User): Observable<boolean> {
    return this.post<boolean>(`api/${this.version}/User/register`, user);
  }

  freezeUser(userId: string): Observable<number> {
    return this.get<number>(`api/${this.version}/User/users-freeze/`, userId);
  }

  unFreezeUser(userId: string): Observable<number> {
    return this.get<number>(`api/${this.version}/User/users-unFreeze/`, userId)
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
}
