import { Injectable } from '@angular/core';
import { EmitService } from './emit-service.service';
import { theme } from 'src/app/model/Theme';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEmit {
  public theme: Subject<theme> = new Subject;
  public page: Subject<number> = new Subject;

  constructor(private emitService: EmitService) {
    this.theme = this.emitService.emitTheme;
    this.page = this.emitService.emitPage;
  }
}
