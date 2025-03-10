import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-lib',
  imports: [CommonModule],
  templateUrl: './my-lib.component.html',
  styleUrl: './my-lib.component.css',
})
export class MyLibComponent {
  message = '';
  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }


}
