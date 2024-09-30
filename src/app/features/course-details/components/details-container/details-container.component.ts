import { Component, inject, Input } from '@angular/core';
import { ICourse } from '../../../../core/interfaces/ICourse';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartComponent } from '../../../../pages/cart/cart.component';
import { Router } from '@angular/router';
import SnackService from '../../../../core/services/snack.service';
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
}
