import { Component, OnInit } from '@angular/core';
import CoursesService from '../../core/services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../../core/interfaces/ICourse';
import { HttpSuccessResult } from '../../core/interfaces/http-success-result.interface';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
})
export class CourseDetailsComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
  ) {}
  course!: ICourse;

  ngOnInit(): void {
    this.course={title:"",thumbnailLink:"",price:0,oldPrice:0,rating:0,author:{firstName:'',lastName:''},_id:"",videoLink:''}
    const id = this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourseById(id!).subscribe((result:HttpSuccessResult) => {
      this.course = result.data;
    });
  }
}
