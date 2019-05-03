import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  firstName :string = 'Kotha';
  lastName :string = 'Sasidhar';
  age: number = 30;
  gender: string = 'Male';

  constructor() { }

  ngOnInit() {
  }

}