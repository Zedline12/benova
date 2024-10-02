import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
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
const search=()=>import("./features/search/search.module").then((m)=>m.SearchModule)
const routes: Routes = [
  {
    component: MainLayoutComponent,
    path: '',
    children: [
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
        loadChildren: auth,
        path: 'auth',
      },
      {
        loadChildren:search,
        path:'search'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
