import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private _id:number;
  private _employeeCount;
  employee: Employee;
  constructor(private _employeeService: EmployeeService,private _route: ActivatedRoute,private _router: Router) {
  }

  ngOnInit(): void {
     this._route.paramMap.subscribe(params=>{
         this._id=+params.get("id");
         this.employee=this._employeeService.getEmployee(this._id);
     })
     this._employeeCount=this._employeeService.getEmployees().length+1;
  }

  viewNextEmployee(){
    this._id=(this._id+1)%this._employeeCount;
    this._id==0?this._id=1:this._id;
    this._router.navigate(["/employees",this._id]);
  }

  

}
