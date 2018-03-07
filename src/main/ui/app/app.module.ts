import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {CardModule} from 'primeng/card';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { SideNavigationComponent } from './features/side-navigation/side-navigation.component';
import { ReadViewComponent } from './features/read-view/read-view.component';
import { EditViewComponent } from './features/edit-view/edit-view.component';
import { SectionComponent } from './features/section/section.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    ReadViewComponent,
    EditViewComponent,
    SectionComponent,
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      TabMenuModule,
      RouterModule,
      TabMenuModule,
      CardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
