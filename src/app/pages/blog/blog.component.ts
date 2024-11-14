import { Component, OnInit, inject } from '@angular/core';
import { BlogService, BlogPost } from '../../core/services/blog.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  private blogService = inject(BlogService);

  posts: BlogPost[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(data => {
      this.posts = data;
      this.loading = false;
    });
  }
}
