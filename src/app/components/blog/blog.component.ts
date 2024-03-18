import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

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
  imports: [NgFor],
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

  // call api GET via service, wait for json response then populate POSTS var 
  getPosts(): void {
    this.service.getPosts().subscribe(response => {
      this.POSTS = response;
    })
  }

  // runs every time component instantiates
  ngOnInit(): void {
    this.getPosts();
  }
}
