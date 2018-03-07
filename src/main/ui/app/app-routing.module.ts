import { NgModule } from '@angular/core';
import {RouterModule, Routes, PreloadAllModules, UrlSegment} from '@angular/router';
import {ReadViewComponent} from "./features/read-view/read-view.component";
import {EditViewComponent} from "./features/edit-view/edit-view.component";


export function read(url: UrlSegment[]) {
    return (url.length > 0 && url[url.length - 1].path.endsWith('read')) ? ({consumed: url}) : null;
}

export function edit(url: UrlSegment[]) {
    return (url.length > 0 && url[url.length - 1].path.endsWith('edit')) ? ({consumed: url}) : null;
}

const app_routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
  { matcher: read, component: ReadViewComponent },
  { matcher: edit, component: EditViewComponent },
  { path: '**', pathMatch: 'full', component: ReadViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes)] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

