import { Component } from '@angular/core';
import CoursesService from '../../services/courses.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(public coursesService: CoursesService) {}
}
