import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {ProfileComponent} from './features/tabs/profile/profile.component';
import {NotificationsComponent} from './features/tabs/notifications/notifications.component';
import {DefaultsComponent} from './features/tabs/defaults/defaults.component';

const app_routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/profile' },
  { path: 'profile', component: ProfileComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'defaults', component: DefaultsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/profile' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes)] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

