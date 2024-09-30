import { EventEmitter, Input, Output } from '@angular/core';

export class BaseButton {
  @Input() public type: 'button' | 'submit' | 'reset' = 'button'; // Button type
  @Input() public color: 'primary' | 'secondary' = 'primary'; // Button color
  @Input() public size: 'small' | 'medium' | 'large' = 'medium'; // Button size
  @Input() public disabled: boolean = false; // Disabled state
  @Input() public loading: boolean = false; // Loading state
  @Output() public click = new EventEmitter<void>(); // Click event
  @Input() public width: string = '';
  @Input() public height: string = '';
  public handleClick() {
    if (!this.disabled && !this.loading) {
      this.click.emit();
    }
  }
}
