import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplos-universal';

  levels = [
    'rookie',
    'champion',
    'ultimate',
    'mega',
    'armor',
    'fresh',
  ]
}
