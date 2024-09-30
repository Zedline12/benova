import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
class SnackService {
  constructor(private MatSnackService: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    return this.MatSnackService.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
        horizontalPosition: 'right',
        
    });
  }
}
export default SnackService;
