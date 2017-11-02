import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carName: string = '';
  carYear: number = 2017;

  cars: [{name: string, year: number}] = [
    {
      name: 'Mazda',
      year: 2010
    },
    {
      name: 'BMW',
      year: 2014
    },
    {
      name: 'Ford',
      year: 2016
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addCar () {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2017;
  }

}
