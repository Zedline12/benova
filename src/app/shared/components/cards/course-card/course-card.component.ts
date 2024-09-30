import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from '../../../../core/interfaces/ICourse';
import CoursesService from '../../../../core/services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnInit {
  @Input({ required: true }) courseId!: string;
  currentCourse!: ICourse
   ngOnInit(): void {
     this.coursesService.getCourseById(this.courseId).subscribe((course) => {
       this.currentCourse=course
     })
   }
  constructor(public coursesService: CoursesService) {}
}
