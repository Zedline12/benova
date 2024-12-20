import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import ScrollSmoother from 'gsap-trial/dist/ScrollSmoother';
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger';
import { gsap } from 'gsap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  title = 'benova';
  smoother!: ScrollSmoother;
  @ViewChild('wrapper') wrapperEl!: ElementRef<HTMLElement>;
  @ViewChild('toTopBtn') toTopBtnEL!: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.smoother = ScrollSmoother.create({
      content: '#smooth-content',
      wrapper: 'app-root',
      smooth: 2,
    });
  }

  @HostListener('window:scroll')
  scrollHandler() {}

  public toTop() {
    this.smoother.scrollTo(this.wrapperEl.nativeElement, true);
  }
}
