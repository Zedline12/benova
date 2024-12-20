import { Component, OnInit } from '@angular/core';
import CoursesService from '../../core/services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../../core/interfaces/ICourse';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss'
})
export class WatchComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
  ) { }
  course!: ICourse;
   ngOnInit(): void {
     const id = this.route.snapshot.paramMap.get('id');
     this.coursesService.getCourseById(id!).subscribe((course) => {
      this.course = course;
    });
   }
}
