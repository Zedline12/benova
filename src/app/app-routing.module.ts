import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
const home = () =>
  import('./features/home/home.module').then((m) => m.HomeModule);
const courseDetails=()=>import("./features/course-details/course-details.module").then((m)=>m.CourseDetailsModule)
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
        loadChildren:courseDetails,
        path:'courses/:id'
       }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
