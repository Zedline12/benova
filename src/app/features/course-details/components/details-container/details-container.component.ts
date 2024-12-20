import { Component, inject, Input } from '@angular/core';
import { ICourse } from '../../../../core/interfaces/ICourse';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import CoursesService from '../../../../core/services/courses.service';
@Component({
  selector: 'details-container',
  templateUrl: './details-container.component.html',
  styleUrl: './details-container.component.scss',
})
export class DetailsContainerComponent {
  @Input({ required: true }) course!: ICourse;
  private _snackBar = inject(MatSnackBar);
  constructor(
    private router: Router,
    private courseService: CoursesService,
  ) {}
  addToCart(courseId: string) {
    this.courseService.addToCartService(courseId);
  }
  openWindow() {
    window.open('https://www.youtube.com/watch?v=fWjsdhR3z3c');
  }
}
