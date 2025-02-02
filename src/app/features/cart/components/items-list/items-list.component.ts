import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
})
export class ItemsListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
  removeFromCart(courseId: string) {
  
  }
}
