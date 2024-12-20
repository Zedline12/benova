import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PaymentSuccessComponent } from './pages/static-pages/payment-success/payment-success.component';
const home = () =>
  import('./features/home/home.module').then((m) => m.HomeModule);
const courseDetails = () =>
  import('./features/course-details/course-details.module').then(
    (m) => m.CourseDetailsModule,
  );
const cart = () =>
  import('./features/cart/cart.module').then((m) => m.CartModule);
const auth = () =>
  import('./features/auth/auth.module').then((m) => m.AuthModule);
const search = () =>
  import('./features/search/search.module').then((m) => m.SearchModule);
const checkout = () =>
  import('./features/checkout/checkout.module').then((m) => m.CheckoutModule);
const watch = () =>
  import('./features/watch/watch.module').then((m) => m.WatchModule);
const routes: Routes = [
  {
    component: MainLayoutComponent,
    path: '',
    children: [
      {
        path: 'payment-success/:id',
        component: PaymentSuccessComponent,
      },
      {
        loadChildren: home,
        path: '',
      },
      {
        loadChildren: cart,
        path: 'cart',
      },
      {
        loadChildren: courseDetails,
        path: 'courses',
      },
      {
        loadChildren: watch,
        path: 'watch',
      },
      {
        loadChildren: checkout,
        path: 'checkout',
      },
      {
        loadChildren: auth,
        path: 'auth',
      },
      {
        loadChildren: search,
        path: 'search',
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
