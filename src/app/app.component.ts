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
  textInput = '';
  status = true;
  myArray = ["Миша", "Майя", "Кирилл", "Люба"];
  dates = [
    new Date(2015, 3, 1).toDateString(),
    new Date(2015, 2, 9).toDateString(),
    new Date(2015, 8, 3).toDateString(),
    new Date(2015, 6, 7).toDateString()
  ];

  constructor () {
    setTimeout( () => {
      this.start = true;
    }, 5000);
    setTimeout( () => this.status = false , 10000);
  }

  onClick () {
    this.line = "hello, Mikhail";
  }

  onKeyUp (event) {
    // console.log(event);
    // this.textInput = (<HTMLInputElement>event.target).value;
    this.textInput = event.target.value;

  }

  toggle() {
    this.status = !this.status;
  }

  add() {
    this.myArray.push(this.textInput);
    this.textInput = '';
  }

  delete() {
    this.myArray.pop();
  }

  bigText (name: string) {
    return name.length > 4 ;
  }

}
