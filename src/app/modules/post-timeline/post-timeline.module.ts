import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostTimelinePageComponent } from './pages/post-timeline-page/post-timeline-page.component';
import { PostTimelineRoutingModule } from './post-timeline-routing.module';

@NgModule({
  declarations: [PostTimelinePageComponent, AddPostComponent],
  imports: [
    CommonModule,
    PostTimelineRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PostTimelineModule {}
