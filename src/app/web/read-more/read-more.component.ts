import { Component, OnInit, Input } from '@angular/core';
import { EmitService } from '../../common/service/emit-service.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  theme: string;
  constructor(private emitService: EmitService) { }

  ngOnInit() {
    this.onChangTheme();
  }

  onChangTheme() {
    this.emitService.eventEmit.subscribe((data: string) => {
      this.theme = data;
    })
  }
}
