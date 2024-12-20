import { Injectable } from '@angular/core';
export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
export const EXPIREDIN_TOKEN_KEY = 'EXPIRED_TOKEN_KEY';
@Injectable()
export class LocalStorageService {
  public setAccessToken(accessToken: string, expiredIn: number): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(EXPIREDIN_TOKEN_KEY, expiredIn.toString());
  }

  public getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  public removeAccessToken(): void {
    localStorage.clear();
  }

  public tokenExpired(): boolean {
    return (
      !this.getAccessToken() &&
      parseInt(localStorage.getItem(EXPIREDIN_TOKEN_KEY) || '0') <= 0
    );
  }

  public setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }
}
