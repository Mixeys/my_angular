import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carName: string = '';
  carYear: number = 2017;

  constructor() { }

  ngOnInit() {
  }

  @Output () onAddCar = new EventEmitter<{name: string, year: number}>();

  addCar () {
    this.onAddCar.emit({
      name: this.carName,
      year: this.carYear
    });

    this.carName = '';
    this.carYear = 2017;
  }

}
