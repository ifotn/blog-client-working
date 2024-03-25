import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// services are "Injectable": can be provided as runtime dependency to other files (components)
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // set api url at class level so all methods can share it
  serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // GET
  getPosts() {
    return this.http.get(`${this.serverUrl}/api/posts`);
  }

  // CREATE using POST
  addPost(post: any) {
    return this.http.post(`${this.serverUrl}/api/posts`, post);
  }

  // DELETE
  deletePost(_id: string) {
    return this.http.delete(`${this.serverUrl}/api/posts/${_id}`);
  }

  // UPDATE using PUT
  updatePost(post: any) {
    return this.http.put(`${this.serverUrl}/api/posts/${post._id}`, post);
  }

}
