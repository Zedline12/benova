import { Injectable } from '@angular/core';
import { baseHttpService } from './base-http.service';
import { Router } from '@angular/router';
import { LocalStorageService } from './localstorage.service';
import { HttpSuccessResult } from '../interfaces/http-success-result.interface';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  constructor(private http: baseHttpService,private localStorageService:LocalStorageService) {}
  login(email: string, password: string): Observable<any> {
    return this.http.post('/auth/login', { email, password });
  }
  isLoggedIn(): boolean {
    return this.localStorageService.getAccessToken() != undefined
  }
  logOut() {
    this.localStorageService.removeAccessToken()
  }
}
