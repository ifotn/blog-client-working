import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // set api url at class level so all methods can share it
    serverUrl: string = environment.serverUrl;

    constructor(private http: HttpClient) { }

    register(user: any) {
      return this.http.post(`${this.serverUrl}/api/users/register`, user);
    }

    login(user: any) {
      return this.http.post(`${this.serverUrl}/api/users/login`, user, { withCredentials: true});
    }

    logout() {
      //return this.http.get(`${this.serverUrl}/api/users/logout`);
      return this.http.get(`${this.serverUrl}/api/users/signout`, { withCredentials: true});
    }
}
