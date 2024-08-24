import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectanglebtnComponent } from './components/buttons/rectanglebtn/rectanglebtn.component';
import { CourseCardComponent } from './components/cards/course-card/course-card.component';

@NgModule({
  declarations: [RectanglebtnComponent, CourseCardComponent],
  imports: [CommonModule],
  exports: [RectanglebtnComponent,CourseCardComponent],
})
export class SharedModule {}
