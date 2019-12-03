import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { IndexComponent } from './web/index/index.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: IndexComponent },
  { path: 'home', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
