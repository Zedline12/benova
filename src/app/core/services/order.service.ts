import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { HttpSuccessResult } from '../interfaces/http-success-result.interface';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}
  getOrderById(orderId: string):Observable<HttpSuccessResult> {
    return this.http.get<HttpSuccessResult | any>(enviroment.apiUrl + `/orders/${orderId}`);
  }
}
