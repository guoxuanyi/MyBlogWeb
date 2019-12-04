import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';
import { Blogs } from 'src/app/model/Blogs';

export interface AjaxInterfaceService {
  version: string;
  GetAllUsers(): Observable<User[]>;
  GetAllUsersNotFreeze(): Observable<User[]>;
  GetUserByUserId(userId: string): Observable<User>;
  SignIn(userName: string, passWord: string): Observable<boolean>;
  Register(user: User): Observable<boolean>;
  FreezeUser(userId: string): Observable<number>;
  UnFreezeUser(userId: string): Observable<number>;
  UpdateUser(user: User): Observable<number>;
  GetNotDeleteBlogs(): Observable<Blogs[]>;
  GetNotDeleteBlogsTop4(): Observable<Blogs[]>;
}
