import { Component, ElementRef, ViewChild } from '@angular/core';
import CoursesService from '../../../../core/services/courses.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'home-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  animations: [
    trigger('searchResultsToggle', [
      // ...
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      transition(':enter', [
        style({height:'0px', opacity: 0}),
        animate('0.2s', style({height: '*', opacity: 1}))
      ]),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
     
    ]),
  ],
})
export class HeroSectionComponent {
  constructor(public readonly coursesService:CoursesService,private readonly router:Router){}
  isSearchResultsOpen:boolean=false
  @ViewChild("searchInput") searchInput!:ElementRef
  searchCourses(keywords:string){
    
    this.coursesService.searchCourses(keywords)
  }
  onSearchSubmit(){
    
     if(this.searchInput.nativeElement.value.length) this.router.navigate(['/search'],{queryParams:{search:this.searchInput.nativeElement.value}})
      return false
  }
  
  onSearchResultsFocusOut(){
    
  }
  onSearchResultsFocusIn(){

  }
}
