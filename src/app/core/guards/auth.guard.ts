import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router); // Inject Router

  if (authService.isLoggedIn()) {
    return true; // Allow access
  } else {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } }); // Redirect to login with the return URL
    return false;
  }
};
