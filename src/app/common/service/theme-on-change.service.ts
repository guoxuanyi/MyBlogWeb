import { Injectable } from '@angular/core';
import { EmitService } from './emit-service.service';
import { theme } from 'src/app/model/Theme';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeOnChangeService {
  public theme: Subject<theme> = new Subject;
  constructor(private emitService: EmitService) {
    this.theme = this.emitService.eventEmit;
  }
}
