import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { baseHttpService } from './services/base-http.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/localstorage.service';
import { StripeService } from './services/stripe.service';
import { OrderService } from './services/order.service';
import { SafePipe } from './pipes/safe.pipe';
import { MoneyPipe } from './pipes/money.pipe';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SafePipe, MoneyPipe],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, SafePipe, MoneyPipe],
  providers: [
    baseHttpService,
    UserService,
    AuthService,
    LocalStorageService,
    StripeService,
    OrderService,
  ],
})
export class CoreModule {}
