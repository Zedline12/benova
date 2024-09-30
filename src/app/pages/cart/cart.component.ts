import { Component, OnInit } from '@angular/core';
import CoursesService from '../../core/services/courses.service';
import { ICourse } from '../../core/interfaces/ICourse';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  //to get cart courses count in template
  constructor(public coursesService: CoursesService) {}
}
