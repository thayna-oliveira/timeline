import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../entities/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private key = 'saved_posts';
  private posts$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  public getPosts(): Observable<Post[]> {
    const data = this.getDataFromStorage();
    this.posts$.next(data);
    return this.posts$.asObservable();
  }

  public savePost(post: Post): void {
    const savedData = this.getDataFromStorage();

    savedData.unshift(post);
    this.saveDataOnStorage(savedData);
  }

  private saveDataOnStorage(data: Post[]): void {
    localStorage.setItem(this.key, JSON.stringify(data));
    this.posts$.next(data);
  }

  private getDataFromStorage(): Post[] {
    const data = localStorage.getItem(this.key);
    return JSON.parse(data!) || [];
  }
}
