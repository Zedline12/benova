import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { HttpSuccessResult } from '../../../core/interfaces/http-success-result.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.userForm.valid) {
      await this.authService.login(
        this.userForm.value.email,
        this.userForm.value.password,
      ).subscribe((result: HttpSuccessResult) => {
        alert(result.status)
        this.localStorageService.setAccessToken(result.data.access_token, 99999);
        this.router.navigate(['/'])
      });
    }
  }
}
