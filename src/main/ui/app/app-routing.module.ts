import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {ReadViewComponent} from "./features/read-view/read-view.component";
import {EditViewComponent} from "./features/edit-view/edit-view.component";

const app_routes: Routes = [
  { path: 'read', component: ReadViewComponent },
  { path: 'edit', component: EditViewComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes)] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

