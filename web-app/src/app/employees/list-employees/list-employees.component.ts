import { Component, OnInit } from '@angular/core';

import {Employee} from 'src/app/models/employee.model';

import {EmployeeService } from "../employee.service";

import { Router} from "@angular/router";
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private _employeeService: EmployeeService,private _router: Router) { 
  }

  ngOnInit(): void {
      this.employees=this._employeeService.getEmployees();
      console.log(this.employees);
  }

  onClickRedirect(id:number){
    let route="employees/"+id;
    this._router.navigate([route]);
  }

}
