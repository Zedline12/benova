import {
  AfterViewInit,
  Component,
  ElementRef,
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
  
  }
  public toTop() {
    this.smoother.scrollTo(this.wrapperEl.nativeElement, true);
  }
}
