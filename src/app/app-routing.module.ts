import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KwordDetailComponent } from './kword/kword-detail/kword-detail.component';
import { HomeComponent } from './kword/home/home.component';

const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'kword', component: KwordDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
