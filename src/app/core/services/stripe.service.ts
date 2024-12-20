import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { HttpSuccessResult } from '../interfaces/http-success-result.interface';
import { Observable } from 'rxjs';
export interface CreateCheckoutSessionDto {
  sessionObjects: StripeSessionObject[];
}
export interface StripeSessionObject {
  courseId: string;
  amount: number;
}
@Injectable()
export class StripeService {
  constructor(private http: HttpClient) {}
  getCheckoutSession(session:CreateCheckoutSessionDto): Observable<HttpSuccessResult | any> {
    return this.http.post<HttpSuccessResult | any>(
      `${enviroment.apiUrl}/stripe/checkout-session`,
      session,
    );
  }
}
