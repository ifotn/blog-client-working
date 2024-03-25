import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// service for api calls
import { BlogService } from '../../services/blog.service';

// define a Post class to structure the data
export class Post {
  _id: string | undefined;
  title: string | undefined;
  body: string | undefined;
  username: string | undefined;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  // inject service dependency
  constructor(private service: BlogService) {}

  // create mock list of blog posts
  // POSTS: Post[] = [
  //   { _id: 'abc123', 'title': '1st Post', body: 'Some stuff', username: 'rich' },
  //   { _id: 'def456', 'title': '2nd Post', body: 'A bit more', username: 'jenna' },
  //   { _id: 'ghi890', 'title': '3rd Post', body: 'Last for today', username: 'chris' },
  //   { _id: 'jkl234', 'title': '4th Post', body: 'Adding to the end', username: 'aryan' }
  // ];
  POSTS: any;
  _id: string | undefined;
  title: string | undefined;
  body: string | undefined;
  username: string | undefined;
  date: Date | undefined;

  // call api GET via service, wait for json response then populate POSTS var 
  getPosts(): void {
    this.service.getPosts().subscribe(response => {
      this.POSTS = response;
    })
  }

  addPost(): void {
    // create new post object from form vals
    let post = {
      title: this.title,
      body: this.body,
      username: this.username,
      date: new Date()
    };

    // send new object to service to api....then refresh blog list
    this.service.addPost(post).subscribe(response => {
      this.getPosts();
      this.resetForm();
    });
  }

  selectPost(post: Post): void {
    this._id = post._id;
    this.title = post.title;
    this.body = post.body;
    this.username = post.username;
  }

  deletePost(): void {
    if (confirm('Are you sure you want to delete this post?') == true) {
      let id = this._id || '';

      this.service.deletePost(id).subscribe(response => {
        this.getPosts();
        this.resetForm();
      });
    } 
  }

  resetForm(): void {
    this._id = undefined;
    this.title = undefined;
    this.body = undefined;
    this.username = undefined;
  }

  // runs every time component instantiates
  ngOnInit(): void {
    this.getPosts();
  }
}
