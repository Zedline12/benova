import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICourse } from '../interfaces/ICourse';
import SnackService from './snack.service';
import { Router } from '@angular/router';
import { HttpSuccessResult } from '../interfaces/http-success-result.interface';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
class CoursesService {
  constructor(
    private http: HttpClient,
    private snackServ: SnackService,
    private router: Router,
  ) {}
  courses$: BehaviorSubject<ICourse[]> = new BehaviorSubject<ICourse[]>([]);
  private cartCourses$: BehaviorSubject<ICourse[]> = new BehaviorSubject<
    ICourse[]
  >([]);
  public searchCourses$: BehaviorSubject<ICourse[]> = new BehaviorSubject<
    ICourse[]
  >([]);
  getCoursesService() {
    this.http
      .get<HttpSuccessResult | any>(`${enviroment.apiUrl}/courses`)
      .subscribe((result: HttpSuccessResult) => {
        this.courses$.next(result.data);
      });
  }
  getCartCoursesService() {
    return this.cartCourses$.value;
  }
  getTotalDiscountCart() {
    return this.cartCourses$.value
      .map((course) => course.oldPrice)
      .reduce((a, b) => a + b, 0);
  }
  getTotalCart() {
    return this.cartCourses$.value
      .map((course) => course.price)
      .reduce((a, b) => a + b, 0);
  }
  searchCourses(keywords: string) {
    if (!keywords.length) return this.searchCourses$.next([]);
    this.http
      .get<ICourse[]>(`/courses/search/${keywords}`)
      .subscribe((results) => {
        this.searchCourses$.next(results);
      });
  }
  addToCartService(courseId: string) {
    // const courseItem = this.courses$.value.find(
    //   (course) => course._id === courseId,
    // );
    this.getCourseById(courseId).subscribe((result:HttpSuccessResult) => {
      this.cartCourses$.next([...this.cartCourses$.value, result.data] as ICourse[]); //this.cartCourses$.next(course);
    });
    const openedSnaack = this.snackServ.openSnackBar(
      'Course Added to Cart',
      'View Cart',
    );
    openedSnaack.onAction().subscribe(() => {
      this.router.navigate(['/cart']);
    });
    openedSnaack.afterDismissed().subscribe(null, null, () => {});
  }
  removeFromCartService(courseId: string) {
    this.cartCourses$.next(
      this.cartCourses$.value.filter((course) => course._id !== courseId),
    );
  }
  getCourseById(id: string): Observable<any> {
    return this.http.get<HttpSuccessResult | any>(
      `${enviroment.apiUrl}/courses/${id}`,
    );
  }
}

export default CoursesService;
