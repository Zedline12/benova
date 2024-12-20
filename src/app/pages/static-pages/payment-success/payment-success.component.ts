import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { IOrder } from '../../../core/interfaces/IOrder';
import { HttpSuccessResult } from '../../../core/interfaces/http-success-result.interface';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss',
})
export class PaymentSuccessComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private orderService: OrderService,
  ) {}
  order!: IOrder;
  ngOnInit(): void {
    const orderId = this.router.snapshot.paramMap.get('id');
    if (!orderId) return;
    this.orderService
      .getOrderById(orderId)
      .subscribe((result: HttpSuccessResult) => {
        this.order = result.data;
        console.log(this.order)
      });
  }
}
