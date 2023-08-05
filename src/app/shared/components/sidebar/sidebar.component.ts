import { Component, Input } from '@angular/core';
import { Sidebar } from './sidebar.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() sidebar: Sidebar;
}
