import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {

  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

}
