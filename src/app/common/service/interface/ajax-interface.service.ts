import { Observable } from 'rxjs';

export interface AjaxInterfaceService {
  version: string;
  GetAllUsers(): Observable<IUser[]>;
  GetAllUsersNotFreeze(): Observable<IUser[]>;
  GetUserByUserId(userId: string): Observable<IUser>;
  Login(userName: string, passWord: string): Observable<boolean>;
  Register(user: IUser): Observable<boolean>;
  FreezeUser(userId: string): Observable<number>;
  UnFreezeUser(userId: string): Observable<number>;
  UpdateUser(user: IUser): Observable<number>;
  GetNotDeleteBlogs(): Observable<IBlogs[]>;
  GetNotDeleteBlogsTop4(): Observable<IBlogs[]>;
}
