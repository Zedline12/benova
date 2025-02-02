import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SafePipe } from './pipes/safe.pipe';
import { MoneyPipe } from './pipes/money.pipe';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SafePipe, MoneyPipe],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, SafePipe, MoneyPipe],
  providers: [ProductsService],
})
export class CoreModule {}
