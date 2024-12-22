import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import CoursesService from '../../../../core/services/courses.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';
import { TimelineLite, gsap } from 'gsap';
@Component({
  selector: 'home-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  animations: [
    trigger('searchResultsToggle', [
      // ...
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
        }),
      ),
      transition(':enter', [
        style({ height: '0px', opacity: 0 }),
        animate('0.2s', style({ height: '*', opacity: 1 })),
      ]),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
        }),
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class HeroSectionComponent implements OnInit {
  constructor(
    public readonly coursesService: CoursesService,
    private readonly router: Router,
  ) {}
  isSearchResultsOpen: boolean = false;

  animationsInit(): void {
    const tl = new TimelineLite({});
    tl.from('.hero-header', 0.5, {
      delay: 1,

      opacity: 0.3,
      '-webkit-filter': 'blur(25px)',
    });
    tl.to('.hero-header', 0.5, {
      opacity: 1,
      '-webkit-filter': 'blur(0px)',
    });
    tl.fromTo(
      '.hero__subheading',
      0.5,
      { opacity: 0.3, '-webkit-filter': 'blur(25px)' },
      { opacity: 1, '-webkit-filter': 'blur(0px)' },
    );
    tl.fromTo(
      '.hero__form',
      0.5,
      { opacity: 0.3, '-webkit-filter': 'blur(25px)' },
      { opacity: 1, '-webkit-filter': 'blur(0px)' },
    );
    tl.fromTo(
      '.hero__information-row',
      0.5,
      { opacity: 0.3, '-webkit-filter': 'blur(25px)' },
      { opacity: 1, '-webkit-filter': 'blur(0px)' },
    );
    tl.fromTo(
      '.right-section',
      0.5,
      { opacity: 0.3, '-webkit-filter': 'blur(25px)' },
      { opacity: 1, '-webkit-filter': 'blur(0px)' },
    );
  }
  ngOnInit(): void {
    this.animationsInit();
  }

  @ViewChild('searchInput') searchInput!: ElementRef;
  searchCourses(keywords: string) {
    this.coursesService.searchCourses(keywords);
  }
  onSearchSubmit() {
    if (this.searchInput.nativeElement.value.length)
      this.router.navigate(['/search'], {
        queryParams: { search: this.searchInput.nativeElement.value },
      });
    return false;
  }

  onSearchResultsFocusOut() {}
  onSearchResultsFocusIn() {}
}
