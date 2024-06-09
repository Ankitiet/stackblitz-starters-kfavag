import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      if (this.loginForm.valid && password === 'Password123') {
        // Redirect to book meeting page
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        this.router.navigate(['/booking']);
      } else {
        // Show error message
        alert('Invalid username or password');
      }
    }
  }
}
