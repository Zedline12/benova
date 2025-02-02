import { Component, OnInit } from '@angular/core';
import gsap from "gsap"
@Component({
  selector: 'speakers-section',
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss',
})
export class SpeakersComponent implements OnInit {
  animationsInit() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.speakers-section',
        start: 'top center',
        end:'bottom+=600 top ',
        scrub: true,
        markers: true,
        pin:true
      },
    });
    tl.to(".speakers-img", 2, { width: '1000px' })
    tl.to('.speakers-text', 2, { delay: 0.5, top: -250 }, "<")
   
    tl.to('.speakers-discount', 4, { delay: 0.5, top: -150,opacity:1 }, "<")
  }
  ngOnInit(): void {
    this.animationsInit();
  }
}
