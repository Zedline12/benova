import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from '../../pages/product-details/product-details.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    CoreModule,
    LayoutsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class ProductDetailsModule {}
