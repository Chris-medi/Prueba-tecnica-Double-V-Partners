import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFollowersComponent } from './details/details-followers.component';

@Component({
  imports: [CommonModule, DetailsFollowersComponent],
  selector: 'app-remote-entry',
  template: `<app-details-followers></app-details-followers>`,
  encapsulation: ViewEncapsulation.None,
})
export class RemoteEntryComponent {}
