import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from "../menu-item/menu-item.component";

export type MenuItem = {
  icon: string;
  label: string;
  route: string
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MenuItemComponent
],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  };

  menuItems = signal<MenuItem[]>([
    {
      icon: 'security_key',
      label: 'Authentication',
      route: 'auth',
      subItems: [
        {
          icon: 'pin',
          label: 'Login',
          route: 'login'
        },
        {
          icon: 'app_registration',
          label: 'Registration',
          route: 'register'
        },
      ]
    },
    {
      icon: 'visibility',
      label: 'Views',
      route: 'view',
      subItems: [
        {
          icon: 'error',
          label: '404',
          route: 'page-not-found'
        },
        {
          icon: 'warning',
          label: '500',
          route: 'server-error'
        },
      ]
    },
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}