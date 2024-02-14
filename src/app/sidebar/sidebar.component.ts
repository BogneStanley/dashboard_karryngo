import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appConfig } from '../app.config';
import { routes } from '../app.routes';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
