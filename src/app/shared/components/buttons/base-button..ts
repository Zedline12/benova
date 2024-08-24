import { EventEmitter, Input, Output } from '@angular/core';

export class BaseButton {
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Button type
  @Input() color: 'primary' | 'secondary' = 'primary'; // Button color
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Button size
  @Input() disabled: boolean = false; // Disabled state
  @Input() loading: boolean = false; // Loading state
  @Output() click = new EventEmitter<void>(); // Click event

  handleClick() {
    if (!this.disabled && !this.loading) {
      this.click.emit();
    }
  }
}
