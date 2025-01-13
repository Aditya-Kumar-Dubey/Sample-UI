import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authRedirectGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  if (authService.isLoggedIn()) {
    router.navigate(['/landing']); // Redirect to landing page if already logged in
    return false; // Prevent navigation to the login page
  }
  return true;
};
