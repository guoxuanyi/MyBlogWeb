import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { isNull, isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(protected http: HttpClient) { }

  public get<T>(url: string, data?: object): Observable<any> {
    var param = new HttpParams();
    let options: object;
    if (isNull(data) || isUndefined(data)) {
      return this.http.get(`${url}`);
    }
    for (const key in data) {
      param = param.set(key, data[key]);
    }
    if (data instanceof String) {
      options = { params: param, responseType: 'text' };
    }
    else {
      options = { params: param, responseType: 'json' };
    }
    return this.http.get<T>(`${url}`, options);
  }

  public post<T>(url: string, params = {}): Observable<any> {
    let options: Object = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text'
    };
    return this.http.post<T>(url, params, options);
  }

  public put<T>(url: string, params = {}): Observable<any> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
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
