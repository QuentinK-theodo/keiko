import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <div>
    <router-outlet />
  </div>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend-angular');
}


