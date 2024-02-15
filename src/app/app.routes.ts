import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { UserPageComponent } from './user-page/user-page.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';

export const routes: Routes = [
  {
    path: 'driver-info',
    component: DriverInfoComponent,
  },
  {
    path: 'users',
    component: UserPageComponent,
  },
  {
    path: 'owner',
    component: OwnerPageComponent,
  },
];
