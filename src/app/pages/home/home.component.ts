import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import CoursesService from '../../core/services/courses.service';
import Lenis from 'lenis';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
  constructor(public coursesService: CoursesService) {}

  ngOnInit(): void {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
    
    this.coursesService.getCoursesService();
    this.coursesService.courses$.subscribe((x) => {});
  }
}
