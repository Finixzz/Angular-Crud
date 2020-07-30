import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

import {Employee} from 'src/app/models/employee.model';
import {Department} from 'src/app/models/depatment.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  empModel : Employee;
  departments: Department[]=[
      new Department(1,'Help Desk'),
      new Department(2,"HR"),
      new Department(3,"IT"),
      new Department(4,"Payroll"),
      new Department(5,"Admin")
  ]
  constructor() {
        this.empModel=new Employee();
   }

  ngOnInit(): void {
  }

  saveEmployee(empForm: NgForm): void{
      console.log(this.empModel);
  }

}
