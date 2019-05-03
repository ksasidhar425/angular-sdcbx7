import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeeDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
