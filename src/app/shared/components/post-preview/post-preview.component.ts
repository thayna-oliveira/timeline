import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/entities/post.interface';
import { User } from 'src/app/core/entities/user.interface';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
})
export class PostPreviewComponent {
  @Input() user: User;
  @Input() post: Post;
}
