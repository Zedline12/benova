import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss',
})
export class CartSummaryComponent implements OnInit {
  constructor(

  ) {}
  totalCart!: number;
  totalDiscount!: number;
  ngOnInit(): void {
  
  }
  checkout() {
    
  }
}
