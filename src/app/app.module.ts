import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KwordDetailComponent } from './kword/kword-detail/kword-detail.component';
import { HomeComponent } from './kword/home/home.component';
import { KwordListComponent } from './kword/kword-list/kword-list.component';
import { RoComponent } from './kword/ro/ro.component';
import { TypeComponent } from './kword/type/type.component';
import { SixComponent } from './kword/six/six.component';

@NgModule({
  declarations: [
    AppComponent,
    KwordDetailComponent,
    HomeComponent,
    KwordListComponent,
    RoComponent,
    TypeComponent,
    SixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
