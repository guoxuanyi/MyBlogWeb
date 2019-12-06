import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { IndexComponent } from './web/index/index.component';
import { SigninComponent } from './web/signin/signin.component';
import { SignupComponent } from './web/signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'home/:page', component: HomeComponent },
  { path: 'signIn/:page', component: SigninComponent },
  { path: 'signUp/:page', component: SignupComponent },
  { path: '**', component: IndexComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
