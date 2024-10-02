import { Component } from '@angular/core';
import CoursesService from '../../../../core/services/courses.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  constructor(public readonly coursesService:CoursesService){}
}
