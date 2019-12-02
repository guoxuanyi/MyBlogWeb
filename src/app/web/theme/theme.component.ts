import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmitService } from '../../common/service/emit-service.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  themeBtn: any[] = ['#42d4bd', '#42c3d4', '#429bd4', '#8BC34A', '#009688', '#673ab7'];
  constructor(private emitService: EmitService) { }

  ngOnInit() {
  }

  changeTheme(event) {
    this.emitService.eventEmit.emit(event);
  }
}
