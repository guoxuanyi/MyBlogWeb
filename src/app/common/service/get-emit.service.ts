import { Injectable, EventEmitter } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Emit {
  public saveTheme: theme;
  public theme: Subject<theme> = new Subject;
  public page: Subject<number> = new Subject;
  public emitTheme: EventEmitter<theme> = new EventEmitter();
  public emitPage: EventEmitter<number> = new EventEmitter();
  constructor() {
    this.theme = this.emitTheme;
    this.page = this.emitPage;
  }
}
