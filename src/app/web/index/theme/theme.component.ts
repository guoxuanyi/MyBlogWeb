import { Component, OnInit } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { Router, NavigationEnd } from '@angular/router';
import { Emit } from '../../../common/service/get-emit.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  themeBtn: theme[] = [
    { bgColor: '#42d4bd', helpColor: '#00cbb6' }, { bgColor: '#42c3d4', helpColor: '#00b6cf' },
    { bgColor: '#429bd4', helpColor: '#30a3dd' }, { bgColor: '#8BC34A', helpColor: '#76c31d' },
    { bgColor: '#009688', helpColor: '#00a493' }, { bgColor: '#673ab7', helpColor: '#7d36d5' },
    { bgColor: '#ffc0ce', helpColor: '#ffbad0' }, { bgColor: '#f44336', helpColor: '#e72b20' }
  ];

  constructor(private router: Router, private commonEmit: Emit) { }

  ngOnInit() {
  }

  changeTheme(event: theme) {
    this.commonEmit.saveTheme = event;
    this.commonEmit.emitTheme.emit(event);
  }

}
