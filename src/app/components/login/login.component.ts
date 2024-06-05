import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string | undefined;
  password: string | undefined;
  apiResponse: any;
  message: string | undefined;

  constructor(private service: AuthService) {}

  login(): any {
    let user = {
      username: this.username,
      password: this.password
    };

    return this.service.login(user).subscribe({
      next: response => {
        console.log(response);
        this.apiResponse = response;
        if (this.apiResponse.success) {
          sessionStorage.setItem('username', this.username ?? '');
          window.location.href = '/blog';
        }
      },
      error: err =>  {
        this.message = err.message
      }
    });
  }
}
