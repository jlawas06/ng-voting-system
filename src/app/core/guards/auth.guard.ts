import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStorageService } from '../services/auth-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthStorageService).isAuthenticated()
  ? true
  : inject(Router).createUrlTree(['/auth/signin']);
};
