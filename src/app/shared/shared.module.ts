import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectanglebtnComponent } from './components/buttons/rectanglebtn/rectanglebtn.component';
import { CourseCardComponent } from './components/cards/course-card/course-card.component';
import { CourseRatingComponent } from './components/data-display/courses/course-rating/course-rating.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    RectanglebtnComponent,
    CourseCardComponent,
    CourseRatingComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, RouterModule, CarouselModule],
  exports: [
    CarouselComponent,
    RectanglebtnComponent,
    CourseCardComponent,
    CourseRatingComponent,
  ],
})
export class SharedModule {}
