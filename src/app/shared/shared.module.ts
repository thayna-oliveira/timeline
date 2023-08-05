import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostFooterComponent } from './components/post-footer/post-footer.component';
import { PostHeaderComponent } from './components/post-header/post-header.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TextFieldComponent } from './components/text-field/text-field.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    TextFieldComponent,
    IconComponent,
    PostPreviewComponent,
    NavbarComponent,
    SidebarComponent,
    PostHeaderComponent,
    PostFooterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, DatePipe],
  exports: [
    ButtonComponent,
    AvatarComponent,
    TextFieldComponent,
    IconComponent,
    PostPreviewComponent,
    NavbarComponent,
    SidebarComponent,
    PostHeaderComponent,
    PostFooterComponent,
  ],
})
export class SharedModule {}
