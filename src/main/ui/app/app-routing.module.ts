import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const app_routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes)] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

