import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KwordDetailComponent } from './kword/kword-detail/kword-detail.component';
import { HomeComponent } from './kword/home/home.component';
import { KwordListComponent } from './kword/kword-list/kword-list.component';
import { RoComponent } from './kword/ro/ro.component';

const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'kword-list', component: KwordListComponent},
  {path: 'kword', component: KwordDetailComponent},
  {path: 'ro', component: RoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
