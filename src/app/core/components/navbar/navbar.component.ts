import { Component, OnInit } from '@angular/core';
import CoursesService from '../../services/courses.service';
import { Router, Event, NavigationStart } from '@angular/router';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public isHomePage!: boolean;
  constructor(
    public coursesService: CoursesService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.router.events.subscribe((route: Event) => {
      if (this.router.url === '/') {
        this.isHomePage = true;
      }
      else {
        this.isHomePage = false;
      } 
    });
  }
}
