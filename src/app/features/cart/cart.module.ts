import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { CartComponent } from '../../pages/cart/cart.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    CartComponent,
    ItemsListComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    LayoutsModule,
    SharedModule
  ]
})
export class CartModule { }
