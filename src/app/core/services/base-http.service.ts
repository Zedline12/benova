import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class baseHttpService {
  constructor(private readonly http: HttpClient) {}
  private readonly baseUrl: string =
    'https://benovabackend-production.up.railway.app';

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + url);
  }

  post<T>(url: string, body: any) {
    this.http.post(this.baseUrl + url, body);
  }
}
