import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Event } from '@angular/router';
import { TimelineLite, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import $ from 'jquery';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarComponent implements OnInit {
  public isHomePage!: boolean;
  public isLoggedIn!:boolean
  constructor(
    private router: Router,
  ) {}
  navbarAnimationInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const tl = new TimelineLite({ defaults: { duration: 1 } });

    tl.from('.nav-item', 0.7, {
      duration: 0.1,
      opacity: '0',
      y: -30,
      ease: 'Sine.out',
      stagger: 0.1,
    }).from('.v-line', 1, {
      duration: 1,
      color: 'black',
      fontSize: '5px',
      ease: 'Sine.out',
    });
    tl.to('.home-nav', 1, { position: 'fixed', scrollTrigger: 'home-nav' });
    tl.play();
    ScrollTrigger.create({
      trigger: '.home-nav', // The navbar element
      start: 'bottom top', // Trigger when the navbar reaches the top
      end: '+=5000',
      onEnter: () => {
        if (!this.isHomePage) return;
        gsap.fromTo(
          '.home-nav',
          {
            duration: 0.5,
            top: -100,
          },
          {
            top: 0,
          },
        );
        gsap.to('.home-nav', {
          duration: 0.5,
          onStart: () => {
            $('.home-nav').addClass('sticky-nav');
          },
        });
        gsap.to('.nav-row', {
          duration: 0.5,
          padding: '20px',
        });
        gsap.to('.v-line', {
          duration: 0.5,
          color: 'black',
        });
        gsap.to('.list-button', { color: 'black', borderColor: 'black' });
        gsap.to('.nav-cart', { color: 'black' });
      },
      onLeaveBack: () => {
        if (!this.isHomePage) return;
        gsap.to('.home-nav', {
          duration: 1,
          ease: 'sine.out',
          onStart: () => {
            $('.home-nav').removeClass('sticky-nav');
          },
        });

        gsap.to('.list-button', { color: 'white', borderColor: 'white' });
        gsap.to('.nav-cart', { color: 'white' });
      },
    });
  }
  ngOnInit(): void {
   
  //  this.navbarAnimationInit();
    this.router.events.subscribe((route: Event) => {
      if (this.router.url === '/') {
        this.isHomePage = true;
      } else {
        this.isHomePage = false;
      }
    });
  }
  logOut() {
   
    this.router.navigate(['/']);
  }
}
