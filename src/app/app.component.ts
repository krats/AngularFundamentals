import { Component } from '@angular/core';

interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  numberOne: number;
  numberTwo: number;
  isHappy: boolean;
  logoUrl: string;
  name: string;
  passengers: Passenger[];

  constructor() {
    this.title = 'Ultimate Angular';
    this.numberOne = 1;
    this.numberTwo = 2;
    this.isHappy = true;
    this.logoUrl = '/favicon.ico';
    this.name = '';
    this.passengers = [
      {
        id: 1,
        fullName: 'Akshara',
        checkedIn: true
      },
      {
        id: 2,
        fullName: 'Karthik',
        checkedIn: false
      },
      {
        id: 3,
        fullName: 'Aarav',
        checkedIn: true
      },
      {
        id: 4,
        fullName: 'Sunanda',
        checkedIn: true
      },
      {
        id: 5,
        fullName: 'Rajendra',
        checkedIn: true
      }
    ];
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleChange(value: string) {
    this.name = value;
  }

  handleClick(value: string) {
    this.name = value;
  }
}
