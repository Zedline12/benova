import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectanglebtnComponent } from './components/rectanglebtn/rectanglebtn.component';

@NgModule({
  declarations: [RectanglebtnComponent],
  imports: [CommonModule],
  exports: [RectanglebtnComponent],
})
export class SharedModule {}
