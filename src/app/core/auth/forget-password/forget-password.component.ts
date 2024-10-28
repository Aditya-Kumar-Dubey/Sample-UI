import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [MatIcon, RouterModule, MatIconModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

}
