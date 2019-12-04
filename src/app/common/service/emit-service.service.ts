import { Injectable, EventEmitter } from '@angular/core';
import { theme } from '../../model/Theme';

@Injectable({
  providedIn: 'root'
})
export class EmitService {
  public emitTheme: EventEmitter<theme> = new EventEmitter();
  public emitPage: EventEmitter<number> = new EventEmitter();

  constructor() {
  }
}
