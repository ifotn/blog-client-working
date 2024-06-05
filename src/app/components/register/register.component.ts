import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  _id: string | undefined;
  username: string | undefined;
  password: string | undefined;

  constructor(private service: AuthService) {}

  register(): void {
    let user = {
      username: this.username,
      password: this.password
    };

    this.service.register(user).subscribe(response => {
      console.log(response);
    });
  }

}
