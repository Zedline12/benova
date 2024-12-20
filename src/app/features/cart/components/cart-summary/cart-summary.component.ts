import { Component, OnInit } from '@angular/core';
import CoursesService from '../../../../core/services/courses.service';
import { StripeService, StripeSessionObject } from '../../../../core/services/stripe.service';
import { HttpSuccessResult } from '../../../../core/interfaces/http-success-result.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss',
})
export class CartSummaryComponent implements OnInit {
  constructor(
    private readonly coursesService: CoursesService,
    private stripeService: StripeService,
    private router: Router,
  ) {}
  totalCart!: number;
  totalDiscount!: number;
  ngOnInit(): void {
    this.totalCart = this.coursesService.getTotalCart();
    this.totalDiscount = this.coursesService.getTotalDiscountCart();
  }
  checkout() {
    const sessionObjects:StripeSessionObject[]=this.coursesService.getCartCoursesService().map((value) => ({courseId:"67425964f482971e5bd6702b",amount:1}));
    this.stripeService.getCheckoutSession({sessionObjects:sessionObjects}).subscribe((result: HttpSuccessResult) => {
      console.log(result.data.url);
         window.location.href=result.data.url
    });
  }
}
