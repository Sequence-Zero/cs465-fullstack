import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripData } from './trip-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authResp: AuthResponse = new AuthResponse();

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripData
  ) {}

  public getToken(): string {
    const out = this.storage.getItem('travlr-token');
    return out || '';
  }

  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp > (Date.now() / 1000);
  }

  public getCurrentUser(): User {
    const token = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }

  public login(user: User, passwd: string): void {
    this.tripDataService.login(user, passwd)
      .subscribe({
        next: (value: AuthResponse) => {
          this.authResp = value;
          this.saveToken(this.authResp.token);
        },
        error: (error: unknown) => {
          console.log('Error: ' + error);
        }
      });
  }

  public register(user: User, passwd: string): void {
    this.tripDataService.register(user, passwd)
      .subscribe({
        next: (value: AuthResponse) => {
          this.authResp = value;
          this.saveToken(this.authResp.token);
        },
        error: (error: unknown) => {
          console.log('Error: ' + error);
        }
      });
  }
}
