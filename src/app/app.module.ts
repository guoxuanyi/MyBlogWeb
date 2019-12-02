import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './web/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './web/header/header.component';
import { ReadMoreComponent } from './web/read-more/read-more.component';
import { DailyPicksComponent } from './web/daily-picks/daily-picks.component';
import { ThemeComponent } from './web/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    ReadMoreComponent,
    DailyPicksComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
