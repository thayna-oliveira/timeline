import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
  @Input() name = '';
  @Input() size = 24;

  iconFile: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.iconFile = this.sanitizer.bypassSecurityTrustResourceUrl(
      `assets/icons/${this.name}.svg`
    );
  }
}
