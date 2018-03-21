import { Component } from '@angular/core';

interface Child {
  name: string;
  age: number;
}

interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkedInDate?: number;
  children?: Child[];
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
        checkedIn: true,
        checkedInDate: 14907420000000,
        children: [{
          name: 'Aarav',
          age: 1
        }]
      },
      {
        id: 2,
        fullName: 'Karthik',
        checkedIn: false
      },
      {
        id: 4,
        fullName: 'Sunanda',
        checkedIn: true,
        checkedInDate: 14884128000000
      },
      {
        id: 5,
        fullName: 'Rajendra',
        checkedIn: false,
        checkedInDate: null
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
