import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss'],
})
export class PostHeaderComponent {
  @Input() name: string;
  @Input() userName: string;
  @Input() postDate: Date;
}
