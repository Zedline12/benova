import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
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
        })
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
        })
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class HeroSectionComponent implements OnInit {
  constructor(private readonly router: Router) {}
  isSearchResultsOpen: boolean = false;
  headphoneHoverAnimation: any;
  private screenWidth!: number;
  animationsInit(): void {
    const tl = new TimelineLite({});
    tl.from('.hero-header', 0.5, {
      delay: 1,
      opacity: 0.3,
      '-webkit-filter': 'blur(25px)',
    });

    tl.from('.hero__subheading', 0.5, {
      delay: 0,
      opacity: 0.3,
      '-webkit-filter': 'blur(25px)',
    });
    tl.fromTo(
      '.hero__form',
      0.5,
      { opacity: 0.3, '-webkit-filter': 'blur(25px)' },
      { opacity: 1, '-webkit-filter': 'blur(0px)' }
    );
    tl.fromTo(
      '.hero__information-row',
      0.5,
      { opacity: 0.3, '-webkit-filter': 'blur(25px)' },
      { opacity: 1, '-webkit-filter': 'blur(0px)' }
    );

    tl.from('.hero__image', 0.5, {
      delay: 0.3,
      opacity: 0.5,
    });
    tl.to('.hero__image', 0.5, {
      opacity: 1,
    });
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.animationsInit();
    const tl = gsap.timeline({ paused: true });
    tl.to('.hero__image', 0.5, { width: '650px', zIndex: 999 });
    tl.to(
      '.black-out',
      { display: 'block', backgroundColor: 'rgba(0,0,0,0.3)' },
      '<'
    );

    this.headphoneHoverAnimation = tl;
  }

  @ViewChild('searchInput') searchInput!: ElementRef;
  searchCourses(keywords: string) {}
  onSearchSubmit() {
    if (this.searchInput.nativeElement.value.length)
      this.router.navigate(['/search'], {
        queryParams: { search: this.searchInput.nativeElement.value },
      });
    return false;
  }
  imageMouseEnter() {
    this.headphoneHoverAnimation.play();
  }
  imageMouseLeave() {
    this.headphoneHoverAnimation.reverse();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  onSearchResultsFocusOut() {}
  onSearchResultsFocusIn() {}
}
