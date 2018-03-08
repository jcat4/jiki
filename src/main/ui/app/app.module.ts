import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {CardModule} from 'primeng/card';
import { MarkdownModule } from 'angular2-markdown';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { SideNavigationComponent } from './features/side-navigation/side-navigation.component';
import { ReadViewComponent } from './features/read-view/read-view.component';
import { EditViewComponent } from './features/edit-view/edit-view.component';
import { SectionComponent } from './features/read-view/section/section.component';
import {PageService} from "./features/read-view/page.service";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import { EditableSectionComponent } from './features/edit-view/editable-section/editable-section.component';
import {AddSectionService} from "./features/edit-view/add-section.service";


@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    ReadViewComponent,
    EditViewComponent,
    SectionComponent,
    EditableSectionComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpModule,
      HttpClientModule,
      TabMenuModule,
      RouterModule,
      TabMenuModule,
      CardModule,
      MarkdownModule.forRoot(),
      ButtonModule,
      FieldsetModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [PageService, AddSectionService],
  entryComponents: [EditableSectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
