import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from './button.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type: ButtonType = '-primary';
  @Input() disabled: boolean;
  @Output() onClickEvent = new EventEmitter();

  handleClickEvent(): void {
    this.onClickEvent.emit();
  }
}
