import { Component, OnInit, Input } from '@angular/core';
import { theme } from 'src/app/model/Theme';
import { EmitService } from 'src/app/common/service/emit-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  theme: theme = new theme;
  constructor(private emitService: EmitService, private router: Router) { }

  ngOnInit(): void {
    this.onChangTheme();
  }

  onChangTheme(): void {
    this.emitService.emitTheme.subscribe((data: theme) => {
      this.theme = data;
    })
  }

  intoHome(): void {
    this.router.navigate(['/home', 2]);
  }
}
