import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

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

  updateCarList (car: {name: string, year: number}) {
    this.cars.push(car);
  }

}
