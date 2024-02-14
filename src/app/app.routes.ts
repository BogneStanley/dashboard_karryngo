import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';

export const routes: Routes = [
  {
    path: 'driver-info',
    component: DriverInfoComponent,
  },
  {
    path: '',
    component: DriverInfoComponent,
  },
];
