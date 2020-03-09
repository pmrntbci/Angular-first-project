import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { UserClassComponent } from './user-class/user-class.component';
import { ViewModuleModule } from './view-module/view-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateTimeComponent,
    AddressCardComponent,
    UserClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
