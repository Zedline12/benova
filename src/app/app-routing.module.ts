import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
const home = () =>
  import('./features/home/home.module').then((m) => m.HomeModule);

const routes: Routes = [
  {
    component: MainLayoutComponent,
    path: '',
    children: [
      {
        loadChildren: home,
        path: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
