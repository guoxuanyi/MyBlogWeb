import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AjaxInterfaceService } from './Interface/ajax-interface.service';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { version } from '../../model/BlogVersion';

@Injectable({
  providedIn: 'root'
})
export class AjaxService extends RequestService implements AjaxInterfaceService {
  version: string;

  constructor(http: HttpClient) {
    super(http);
    this.version = version;
  }

  GetAllUsers(): Observable<IUser[]> {
    return this.get<IUser[]>(`api/${this.version}/User/users`);
  }

  GetAllUsersNotFreeze(): Observable<IUser[]> {
    return this.get<IUser[]>(`api/${this.version}/User/users-unFreeze`);
  }

  GetUserByUserId(userId: string): Observable<IUser> {
    return this.get<IUser>(`api/${this.version}/User/users/`, userId);
  }

  Login(userName: string, userPassWord: string): Observable<boolean> {
    let data = {
      userName,
      userPassWord
    };
    return this.post<boolean>(`api/${this.version}/User/login`, data);
  }

  Register(user: IUser): Observable<boolean> {
    return this.post<boolean>(`api/${this.version}/User/register`, user);
  }

  FreezeUser(userId: string): Observable<number> {
    return this.get<number>(`api/${this.version}/User/users-freeze/`, userId);
  }

  UnFreezeUser(userId: string): Observable<number> {
    return this.get<number>(`api/${this.version}/User/users-unFreeze/`, userId)
  }

  UpdateUser(user: IUser): Observable<number> {
    return this.put<number>(`api/${this.version}/User/update`, user);
  }

  GetNotDeleteBlogs(): Observable<IBlogs[]> {
    return this.get<IBlogs[]>(`api/${this.version}/Blog/undelete-blogs`);
  }

  GetNotDeleteBlogsTop4(): Observable<IBlogs[]> {
    return this.get<IBlogs[]>(`api/${this.version}/Blog/top4-undelete-blogs`);
  }
}
