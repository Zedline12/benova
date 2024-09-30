import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ICourse } from '../../../core/interfaces/ICourse';
import CoursesService from '../../../core/services/courses.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
    constructor(public coursesService: CoursesService) {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 100,
    navSpeed: 700,
    navText: [
      "<i class='bi bi-caret-left-fill'></i>",
      "<i class='bi bi-caret-right-fill'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
