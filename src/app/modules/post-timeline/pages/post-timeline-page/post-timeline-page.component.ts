import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/entities/post.interface';
import { User } from 'src/app/core/entities/user.interface';
import { PostService } from 'src/app/core/services/post.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-post-timeline-page',
  templateUrl: './post-timeline-page.component.html',
  styleUrls: ['./post-timeline-page.component.scss'],
})
export class PostTimelinePageComponent implements OnInit, OnDestroy {
  userData: User;
  postsSubscription$: Subscription;
  posts: Post[];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userData = this.userService.getUser();

    this.postsSubscription$ = this.postService
      .getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  ngOnDestroy(): void {
    if (this.postsSubscription$) this.postsSubscription$?.unsubscribe();
  }

  savePost(post: Post): void {
    this.postService.savePost(post);
  }
}
