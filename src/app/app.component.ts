import { Component } from '@angular/core';
import { Entry } from './models/Entry.model';
import { CalculateService } from './services/calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private calculateService: CalculateService){

  }
  title = 'FooBarQixWeb';
  resulat = '';
  number = 0;
  // call the service to calculate (Replace number to caracters)
  onClick() {
    if (this.number > 2147483647) {
      this.resulat = 'Choose a number less than 2147483648';
      return;
    }
    const entry = new Entry(this.number, '*');
    this.calculateService.calculate(entry).subscribe(results => {
      this.resulat = results;
    });
  }
  // Add the numbers in input if less than 2147483647 (max of int)
  pressKey(key: string) {
    if (this.number > 2147483647 || this.number.toString().length > 10) {
      this.resulat = 'Choose a number less than 2147483648';
      return;
    }
    if (key === '*') {
      return;
    }
    this.number = parseInt(this.number.toString() + key);
 }
 // empty the input text
 allClear() {
  this.number = 0;
  this.resulat = '';
 }
}
