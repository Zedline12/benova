import { Component, OnInit } from '@angular/core';
import CoursesService from '../../../../core/services/courses.service';
import { ICourse } from '../../../../core/interfaces/ICourse';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
})
export class ItemsListComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}
  cartCourses: ICourse[] = [];
  ngOnInit(): void { this.cartCourses=this.coursesService.getCartCoursesService() }
}
