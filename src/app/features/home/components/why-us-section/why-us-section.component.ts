import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'why-us-section',
  templateUrl: './why-us-section.component.html',
  styleUrl: './why-us-section.component.scss',
})
export class WhyUsComponent implements OnInit {
  animationsInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    let imgTl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: '.contain',
        start: 'top bottom',
        end: '+=600',
        scrub: true,
      },
    });
    imgTl.fromTo(
      '.vector-img',
      1.5,
      { position: 'absolute', left: -100, opacity: 0 },
      { position: 'relative', left: 0, opacity: 1, duration: 1.5 },
    );
    let textTl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: '.text-container',
        start: 'top bottom',
        end: '+=300',
        scrub: 1,
      },
    });
    let titleTl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: '.text-container',
        start: 'top bottom',
        end: '+=200',
        scrub: 1,
      },
    });
    textTl.fromTo('.text-container', 1, { opacity: 0 }, { opacity: 1 });
    titleTl.fromTo(
      '.main-text',
      2,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, ease: 'expo.in' },
    );
    textTl.fromTo(
      '.first-li',
      { x: 200, opacity: 0 },
      { x: 0, duration: 2, ease: 'expo.in', opacity: 1 },
    );
    let secondLiTl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: '.text-container',
        start: 'top 650px',
        end: '+=200',
        scrub: 1,
      },
    });
    secondLiTl.fromTo(
      '.second-li',
      { x: 200, opacity: 0, delay: 1 },
      { x: 0, duration: 2, ease: 'expo.in', opacity: 1 },
    );
  }
  ngOnInit(): void {
    this.animationsInit();
  }
}
