import { Component, OnInit } from '@angular/core';
import CoursesService from '../../core/services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
   constructor(public readonly coursesService:CoursesService,private readonly route:ActivatedRoute){}
  search!: string
  searchAll!:boolean
   ngOnInit(): void {
     this.route.queryParams.subscribe((params) => {
       if (!params["search"]) { this.coursesService.searchCourses("*");this.searchAll=true}
       else {
         this.search=params["search"]
         this.coursesService.searchCourses(this.search)
         this.searchAll=false
       }
     })
   }
}
