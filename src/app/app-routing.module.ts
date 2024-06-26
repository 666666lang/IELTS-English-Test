import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KwordDetailComponent } from './kword/kword-detail/kword-detail.component';
import { HomeComponent } from './kword/home/home.component';
import { KwordListComponent } from './kword/kword-list/kword-list.component';
import { RoComponent } from './kword/ro/ro.component';
import { SixComponent } from './kword/six/six.component';
import { TypeComponent } from './kword/type/type.component';
import { WeComponent } from './kword/we/we.component';
import { RsComponent } from './kword/rs/rs.component';
import { SstComponent } from './kword/sst/sst.component';
import { FibLComponent } from './kword/fib-l/fib-l.component';
import { FibComponent } from './kword/fib/fib.component';

const routes:Routes = [
  {path: '', component: TypeComponent},
  {path: 'kword-list', component: KwordListComponent},
  {path: 'kword', component: KwordDetailComponent},
  {path: 'type', component: TypeComponent},
  {path: 'RO', component: RoComponent},
  {path: 'SIX', component: SixComponent},
  {path: 'SST', component: SstComponent},
  {path: 'WE', component: WeComponent},
  {path: 'RS', component: RsComponent},
  {path: 'L', component: FibComponent},
  {path: 'FIB', component: FibLComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
