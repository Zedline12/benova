import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { ICourse } from '../interfaces/ICourse';
import SnackService from './snack.service';
import { Router } from '@angular/router';
import { baseHttpService } from './base-http.service';
@Injectable({
  providedIn: 'root',
})
class CoursesService {
  constructor(
    private http: baseHttpService,
    private snackServ: SnackService,
    private router: Router,
  ) {}
  courses$: BehaviorSubject<ICourse[]> = new BehaviorSubject<ICourse[]>([]);
  private cartCourses$: BehaviorSubject<ICourse[]> = new BehaviorSubject<
    ICourse[]
  >([]);
  getCoursesService() {
    this.http.get<ICourse[]>('/courses').subscribe((data: ICourse[]) => {
      this.courses$.next(data);
    });
  }
  getCartCoursesService() {
    return this.cartCourses$.value;
  }
  addToCartService(courseId: string) {
    // // const courseItem = this.courses$.value.find(
    // //   (course) => course._id === courseId,
    // // );
    // this.cartCourses$.next([...this.cartCourses$.value, courseItem!]);
    // const openedSnaack = this.snackServ.openSnackBar(
    //   'Course Added to Cart',
    //   'View Cart',
    // );
    // openedSnaack.onAction().subscribe(() => {
    //   this.router.navigate(['/cart']);
    // });
    // openedSnaack.afterDismissed().subscribe(null, null, () => {});
  }
  getCourseById(id: string) {
    return this.http.get<ICourse>(`/courses/${id}`);
  }
}

export default CoursesService;
