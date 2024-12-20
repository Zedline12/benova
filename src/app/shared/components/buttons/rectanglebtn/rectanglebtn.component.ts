import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rectangle-btn',
  templateUrl: './rectanglebtn.component.html',
  styleUrl: './rectanglebtn.component.scss',
})
export class RectanglebtnComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Button type
  @Input() backgroundColor: string = 'primary'; // Button color
  @Input() size!: 'small' | 'medium' | 'large'; // Button size
  @Input() disabled: boolean = false; // Disabled state
  @Input() loading: boolean = false; // Loading state
  @Input() style: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() fontSize: string = "";
  @Output() btnclick = new EventEmitter<void>(); // Click event

  handleClick() {
    if (!this.disabled && !this.loading) {
      this.btnclick.emit();
    }
  }
}
