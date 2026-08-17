import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class Login {

  credentials = {
    username: '',
    password: ''
  };

  constructor(
    private auth: Authentication,
    private router: Router
  ) {}

  login() {
    this.auth.login(this.credentials).subscribe({
      next: (result: any) => {

        localStorage.setItem('travlr-token', result.token);

        this.router.navigate(['/trips']);
      },

      error: () => {
        alert('Invalid username or password');
      }
    });
  }

}