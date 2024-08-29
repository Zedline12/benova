import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { CartComponent } from '../../pages/cart/cart.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CartComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    LayoutsModule,
    SharedModule
  ]
})
export class CartModule { }
