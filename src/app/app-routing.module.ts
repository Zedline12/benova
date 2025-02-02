import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
const home = () =>
  import('./features/home/home.module').then((m) => m.HomeModule);
const courseDetails = () =>
  import('./features/product-details/product-details.module').then(
    (m) => m.ProductDetailsModule,
  );
const cart = () =>
  import('./features/cart/cart.module').then((m) => m.CartModule);
const auth = () =>
  import('./features/auth/auth.module').then((m) => m.AuthModule);
const checkout = () =>
  import('./features/checkout/checkout.module').then((m) => m.CheckoutModule);
const routes: Routes = [
  {
   
      loadChildren: home,
      path: '',
    
  },
  {
    component: MainLayoutComponent,
    path: '',
    children: [
     
      {
        loadChildren: cart,
        path: 'cart',
      },
      {
        loadChildren: courseDetails,
        path: 'products',
      },
    
      {
        loadChildren: checkout,
        path: 'checkout',
      },
      {
        loadChildren: auth,
        path: 'auth',
      },
    
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
