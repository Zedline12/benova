import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailsRoutingModule } from './course-details-routing.module';
import { CourseDetailsComponent } from '../../pages/course-details/course-details.component';
import { DetailsContainerComponent } from './components/details-container/details-container.component';


@NgModule({
  declarations: [CourseDetailsComponent, DetailsContainerComponent, DetailsContainerComponent],
  imports: [
    CommonModule,
    CourseDetailsRoutingModule
  ]
})
export class CourseDetailsModule { }
