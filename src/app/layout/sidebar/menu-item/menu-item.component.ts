import { Component, input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from '../sidenav/sidenav.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({opacity: 0, height: '0px'}),
        animate('500ms ease-in-out', style({opacity: 1, height: '*'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({opacity: 0, height: '0px'}))
      ])
    ])
  ],
  imports: [MatListModule, RouterModule, MatIcon],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  constructor(private router: Router) {}

  item = input.required<MenuItem>()

  collapsed = input(false);

  nestedMenuOpen = signal(false);

  toggleNested() {
    if(!this.item().subItems) {
     return; 
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }

  navigate() {
    const route = this.item().route;
    if (route) {
      this.router.navigate([route]).catch((error) => {
        console.error('Navigation error:', error);
      });
    }
  }

}
