import { Component, OnInit } from '@angular/core';
import CoursesService from '../../core/services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public coursesService: CoursesService) {}
  ngOnInit(): void {
    this.coursesService.getCoursesService()
    this.coursesService.courses$.subscribe((x) => {
      console.log(x)
    })
  }
}
