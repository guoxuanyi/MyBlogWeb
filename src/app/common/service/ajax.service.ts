import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AjaxInterfaceService } from './Interface/ajax-interface.service';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { version } from '../../model/BlogVersion';
import { User } from 'src/app/model/User';
import { Blogs } from 'src/app/model/Blogs';
import { SingInUser } from '../../model/SignInUser';

@Injectable({
  providedIn: 'root'
})
export class AjaxService extends RequestService implements AjaxInterfaceService {
  version: string;

  constructor(http: HttpClient) {
    super(http);
    this.version = version;
  }

  GetAllUsers(): Observable<User[]> {
    return this.get<User[]>(`api/${this.version}/User/users`);
  }

  GetAllUsersNotFreeze(): Observable<User[]> {
    return this.get<User[]>(`api/${this.version}/User/users-unFreeze`);
  }

  GetUserByUserId(userId: string): Observable<User> {
    return this.get<User>(`api/${this.version}/User/users/`, userId);
  }

  SignIn(userName: string, userPassWord: string): Observable<boolean> {
    let data: SingInUser = new SingInUser;
    data.userName = userName;
    data.userPassWord = userPassWord;
    return this.post<boolean>(`api/${this.version}/User/login`, data);
  }

  Register(user: User): Observable<boolean> {
    return this.post<boolean>(`api/${this.version}/User/register`, user);
  }

  FreezeUser(userId: string): Observable<number> {
    return this.get<number>(`api/${this.version}/User/users-freeze/`, userId);
  }

  UnFreezeUser(userId: string): Observable<number> {
    return this.get<number>(`api/${this.version}/User/users-unFreeze/`, userId)
  }

  UpdateUser(user: User): Observable<number> {
    return this.put<number>(`api/${this.version}/User/update`, user);
  }

  GetNotDeleteBlogs(): Observable<Blogs[]> {
    return this.get<Blogs[]>(`api/${this.version}/Blog/undelete-blogs`);
  }

  GetNotDeleteBlogsTop4(): Observable<Blogs[]> {
    return this.get<Blogs[]>(`api/${this.version}/Blog/top4-undelete-blogs`);
  }
}
