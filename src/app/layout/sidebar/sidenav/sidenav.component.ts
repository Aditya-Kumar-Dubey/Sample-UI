import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from "../menu-item/menu-item.component";

export type MenuItem = {
  icon: string;
  label: string;
  title?: string;
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
        {
          icon: 'app_registration',
          label: 'Forget Password',
          title: 'Forget Password',
          route: 'forget-password'
        },
      ]
    },
    {
      icon: 'view_agenda',
      label: 'Cards',
      route: 'cards',
      subItems: [
        {
          icon: 'view_day',
          label: 'Service Card',
          title: 'Service Card',
          route: 'service-card'
        },
        {
          icon: 'view_day',
          label: 'Profile Card',
          title: 'Profile Card',
          route: 'p-card'
        },
        {
          icon: 'view_day',
          label: 'Price Card',
          title: 'Price Card',
          route: 'price-card'
        },
      ]
    },
    {
      icon: 'table',
      label: 'Lists',
      route: 'tables',
      subItems: [
        {
          icon: 'filter',
          label: 'Filter List',
          title: 'Filter List',
          route: 'filter-table'
        },
        {
          icon: 'filter',
          label: 'Simple List',
          title: 'Simple List',
          route: 's-table'
        },
        {
          icon: 'filter',
          label: 'Editable List',
          title: 'Editable List',
          route: 'editable-table'
        },
        {
          icon: 'filter',
          label: 'Transaction List',
          title: 'Transaction List',
          route: 'transaction-table'
        },
      ]
    },
    {
      icon: 'shoppingmode',
      label: 'E-Ecommerce',
      route: 'e-comm',
      subItems: [
        {
          icon: 'shopping_cart_checkout',
          label: 'Checkout',
          title: 'Checkout',
          route: 'checkout'
        },
        {
          icon: 'view_agenda',
          label: 'Product-Carousel',
          title: 'Product-Carousel',
          route: 'product-carousel'
        },
        {
          icon: 'view_agenda',
          label: 'Add To Cart',
          title: 'Add To Cart',
          route: 'add-to-cart'
        },
        {
          icon: 'view_agenda',
          label: 'Credit Card Checkout',
          title: 'Credit Card Checkout',
          route: 'crdt-crd-ckout'
        },
        {
          icon: 'view_agenda',
          label: 'Product Detail',
          title: 'Product Detail',
          route: 'product-detail'
        },
        {
          icon: 'view_agenda',
          label: 'Checkout Flow',
          title: 'Checkout Flow',
          route: 'product-list'
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