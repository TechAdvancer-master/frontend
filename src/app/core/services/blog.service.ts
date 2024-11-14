import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface BlogPost {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: BlogPost[] = [
    { id: 1, title: 'Welcome to Our Blog', content: 'This is our first blog post.' },
  ];

  getPosts(): Observable<BlogPost[]> {
    return of(this.posts);
  }
}
