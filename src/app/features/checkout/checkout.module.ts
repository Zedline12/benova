import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from '../../pages/checkout/checkout.component';
import { LayoutsModule } from '../../layouts/layouts.module';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, CheckoutRoutingModule, LayoutsModule],
})
export class CheckoutModule {}
