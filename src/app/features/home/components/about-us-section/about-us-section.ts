import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'about-us-section',
  templateUrl: './about-us-section.html',
  styleUrls: ['./about-us-section.scss'],
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-us-section',
        scrub: true,
        pin: true,
        start: 'center center',
        end: '+=250%',
        markers: true,
      },
    });
    //first line replacement
    tl.to('.line-1', 0.3, {
      delay: 0.5,
      position: 'absolute',
      left: '-100%',
      opacity: 0,
    })
      .to(
        '.line-2',
        0.5,
        {
          position: 'relative',
          left: '0',
          opacity: 1,
        },
        '<',
      )
      .to(
        '.slider-2',
        {
          opacity: 1,
        },
        '<',
      )
      .to(
        '.slider-1',
        {
          opacity: 0.5,
        },
        '<',
      )
      //second line replacement
      .to('.line-2', 0.3, {
        delay: 0.2,
        position: 'absolute',
        left: '-100%',
        opacity: 0,
      })
      .to(
        '.line-3',
        0.5,
        {
          position: 'relative',
          left: '0',
          opacity: 1,
        },
        '<',
      )
      .to(
        '.slider-3',
        {
          opacity: 1,
        },
        '<',
      )
      .to(
        '.slider-2',
        {
          opacity: 0.5,
        },
        '<',
      )
     
    .to(".slider",{opacity:0},"<")
    //
  }
}
