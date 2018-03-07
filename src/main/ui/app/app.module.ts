import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { SideNavigationComponent } from './features/side-navigation/side-navigation.component';
import { ReadViewComponent } from './features/read-view/read-view.component';
import { EditViewComponent } from './features/edit-view/edit-view.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    ReadViewComponent,
    EditViewComponent,
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      TabMenuModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
