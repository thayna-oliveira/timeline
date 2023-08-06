import { Component } from '@angular/core';
import { Sidebar } from './shared/components/sidebar/sidebar.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidebar: Sidebar = {
    logo: 'logo',
    itens: [
      { icon: 'home', description: 'Home' },
      { icon: 'hashtag', description: 'Explore' },
      { icon: 'notification', description: 'Notifications' },
      { icon: 'message', description: 'Messages' },
      { icon: 'bookmark', description: 'Bookmarks' },
      { icon: 'more', description: 'More' },
    ],
  };
}
