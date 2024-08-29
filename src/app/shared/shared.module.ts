import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectanglebtnComponent } from './components/buttons/rectanglebtn/rectanglebtn.component';
import { CourseCardComponent } from './components/cards/course-card/course-card.component';
import { CourseRatingComponent } from './components/data-display/courses/course-rating/course-rating.component';

@NgModule({
  declarations: [RectanglebtnComponent, CourseCardComponent,CourseRatingComponent],
  imports: [CommonModule],
  exports: [RectanglebtnComponent,CourseCardComponent,CourseRatingComponent],
})
export class SharedModule {}
