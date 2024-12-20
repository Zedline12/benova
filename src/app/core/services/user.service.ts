import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { baseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';  
@Injectable()
export class UserService {
  constructor(
    private http: baseHttpService,
    private router: Router,
  ) {}
   createUser(user: IUser): Observable<any> {
     return this.http.post('/users', user)
  }
 
}
