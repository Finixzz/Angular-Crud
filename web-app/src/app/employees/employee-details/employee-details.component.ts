import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  constructor(private _employeeService: EmployeeService,private _route: ActivatedRoute) { 
      
  }

  ngOnInit(): void {
     const id=+this._route.snapshot.params["id"];
     this.employee=this._employeeService.getEmployee(id);
  }

}
