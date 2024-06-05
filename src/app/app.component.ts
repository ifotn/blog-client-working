import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Blog';
  currentUser: string | undefined;

  constructor(private service: AuthService, private cookies: CookieService) {}

  // runs every time component instantiates
  ngOnInit(): void {
    this.currentUser = sessionStorage.getItem('username') ?? undefined;
  }

  logout(): any {
    this.service.logout().subscribe(response => {
      console.log(response);
      sessionStorage.clear();
      //sessionStorage.removeItem('username');
      window.location.href = '/';
    });
  }
}
