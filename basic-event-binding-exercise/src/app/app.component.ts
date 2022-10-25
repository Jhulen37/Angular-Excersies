import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basic-event-binding-exercise';
  struggling: string;
  constructor() {}

  clickEvent() {
    console.log('hello');
    // this.struggling = 'Button is Clicked';
    // return this.struggling;
  }
}
