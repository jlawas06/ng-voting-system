import { Injectable } from '@angular/core';
import { TOKEN_KEY } from '@app/constants/token.constants';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  constructor(private jwtHelper: JwtHelperService) {}

  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null && this.isTokenExpired();
  }

  purge() {
    localStorage.removeItem(TOKEN_KEY);
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY) as string;
  }

  getDecodedToken() {
    return this.jwtHelper.decodeToken(this.getToken());
  }

  isTokenExpired(): boolean {
    try {
      return this.jwtHelper.isTokenExpired(this.getToken());
    } catch (error) {
      console.error('Invalid token');
      return true;
    }
  }
}
