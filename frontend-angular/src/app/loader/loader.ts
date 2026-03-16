import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  template: `
  <div>
    <img src="/loading.svg"/>
  </div>
  `,
  styleUrl: './loader.css',
})
export class Loader {}
