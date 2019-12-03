import { Component, OnInit, Input } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { EmitService } from 'src/app/common/service/emit-service.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  theme: theme = new theme;
  constructor(private emitService: EmitService) { }

  ngOnInit() {
    this.onChangTheme();
  }

  onChangTheme() {
    this.emitService.eventEmit.subscribe((data: theme) => {
      this.theme = data;
    })
  }
}
