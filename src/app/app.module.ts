import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './web/index/header/header.component';
import { ReadMoreComponent } from './web/index/read-more/read-more.component';
import { DailyPicksComponent } from './web/index/daily-picks/daily-picks.component';
import { ThemeComponent } from './web/index/theme/theme.component';
import { AboutComponent } from './web/index/about/about.component';
import { FooterComponent } from './web/footer/footer.component';
import { HomeComponent } from './web/home/home.component';
import { IndexComponent } from './web/index/index.component';
import { SigninComponent } from './web/signin/signin.component';
import { SignupComponent } from './web/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReadMoreComponent,
    DailyPicksComponent,
    ThemeComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    IndexComponent,
    SigninComponent,
    SignupComponent,
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
