import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Pokemon} from './pokemon/pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokemon],
  template: `
    <pokemon />
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend-angular');
}


