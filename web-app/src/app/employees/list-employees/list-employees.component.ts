import { Component, OnInit } from '@angular/core';

import {Employee} from 'src/app/models/employee.model';

import {EmployeeService } from "../employee.service";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(private _employeeService: EmployeeService) { 
  }

  ngOnInit(): void {
      this.employees=this._employeeService.getEmployees();
  }

}
