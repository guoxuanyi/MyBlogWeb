import { Injectable, EventEmitter } from '@angular/core';
import { theme } from '../../model/Theme';

@Injectable({
  providedIn: 'root'
})
export class EmitService {
  public eventEmit: EventEmitter<theme> = new EventEmitter();
  constructor() {
  }
}
