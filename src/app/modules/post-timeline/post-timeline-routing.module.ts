import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostTimelinePageComponent } from './pages/post-timeline-page/post-timeline-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostTimelinePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostTimelineRoutingModule {}
