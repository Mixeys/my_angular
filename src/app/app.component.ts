import { Event } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  start = false;
  line = '';
  textInput = 'Default text';

  constructor () {
    setTimeout( () => {
      this.start = true;
    }, 5000);
  }

  onClick () {
    this.line = "hello, Mikhail";
  }

  onKeyUp (event) {
    // console.log(event);
    // this.textInput = (<HTMLInputElement>event.target).value;
    this.textInput = event.target.value;

  }

}
