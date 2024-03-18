import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// services are "Injectable": can be provided as runtime dependency to other files (components)
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  // GET
  getPosts() {
    return this.http.get('http://localhost:3000/api/posts');
  }

}
