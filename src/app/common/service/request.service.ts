import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { isNull, isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(protected http: HttpClient) { }

  public get<T>(url: string, params?: any): Observable<any> {
    if (isNull(params) || isUndefined(params) || params === '') {
      return this.http.get(`${url}`);
    }
    return this.http.get<T>(`${url}${params}`);
  }

  public post<T>(url: string, params = {}): Observable<any> {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<T>(url, params, options);
  }

  public put<T>(url: string, params = {}): Observable<any> {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<T>(url, params, options);
  }

  public delete<T>(url: string, params = {}): Observable<any> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: params
    };
    return this.http.delete<T>(url, options);
  }
}
