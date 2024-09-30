import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from '../../pages/course-details/course-details.component';

const routes: Routes = [
  {
    path:':id',component:CourseDetailsComponent,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailsRoutingModule { }
