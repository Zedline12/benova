import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TimelineLite } from 'gsap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
  constructor() {}
  animationsInit() {
    const tl = new TimelineLite({});
    tl.from('.header-section', 1, {
      delay: 3.1,
      backgroundImage:
        'radial-gradient(at 68% 82%, hsla(223,0%,6%,1) 0px, transparent 50%),radial-gradient(at 42% 22%, hsla(26,0%,6%,1) 0px, transparent 50%),radial-gradient(at 46% 63%, hsla(189,0%,8%,1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(355,0%,8%,1) 0px, transparent 50%),radial-gradient(at 100% 54%, hsla(289,0%,6%,0.47) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(289,0%,6%,0.47) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(289,0%,6%,0.47) 0px, transparent 50%)',
    });
  }
  ngOnInit(): void {
    this.animationsInit();
  }
}
