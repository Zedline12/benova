import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'speaker-section',
  templateUrl: './speaker-section.component.html',
  styleUrl: './speaker-section.component.scss',
})
export class SpeakerSectionComponent implements OnInit {
  private animationsInit(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.speaker-section',
        
        scrub: true,
      },
    });
    tl.fromTo(
      '.speaker-section__image',
      2,
      { boxShadow: '0px 0px 160px 0px rgba(0, 0, 0, 0.9)' },
      { boxShadow: '0px 0px 80px 0px rgba(255, 255, 255, 0.9)' }
    );
    tl.fromTo(
      '.speaker-section__heading',
      1,
      { opacity: 0 },
      { opacity: 1 },
      '<'
    );
    tl.fromTo(
      '.speaker-section__subheading',
      1,
      { opacity: 0 },
      { opacity: 1 },
      '<'
    );
    // tl.fromTo(".section__subheading", 1.5, { position: 'absolute', left: 200, opacity: 0, },{left:0,position:'relative',opacity:1},"<")
    // tl.fromTo(".section__buttons", 1.7, { position: 'absolute', left: 100, opacity: 0, },{left:0,position:'relative',opacity:1},"<")
    //   tl.fromTo(".section__heading",1, { position: 'absolute', left:'100%',top:'100%', opacity: 0, width:'450px'},{position:'relative', left:0, top:0, opacity:1, width:'100%'})
  }

  ngOnInit(): void {
    this.animationsInit();
  }
}
