import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './features/card/card.component';
import { TabsComponent } from './features/tabs/tabs.component';
import { ProfileComponent } from './features/tabs/profile/profile.component';
import { NotificationsComponent } from './features/tabs/notifications/notifications.component';
import { DefaultsComponent } from './features/tabs/defaults/defaults.component';
import {AppRoutingModule} from './app-routing.module';
import {EoiService} from "./services/eoi.service";
import {HttpClientModule} from "@angular/common/http";
import { PhoneNumberPipe } from './pipes/phone-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TabsComponent,
    ProfileComponent,
    NotificationsComponent,
    DefaultsComponent,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EoiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
