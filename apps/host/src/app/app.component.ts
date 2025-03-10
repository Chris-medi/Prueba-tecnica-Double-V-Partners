import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { DetailsComponent } from './details/details.component';

@Component({
  imports: [ RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host';
}
