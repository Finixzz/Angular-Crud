import { Component, OnInit } from '@angular/core';

import {Employee} from 'src/app/models/employee.model';

import {EmployeeService } from "../employee.service";

import { Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  private employees: Employee[];
  private filteredEmployees: Employee[];
  searchTerm: string="";
  counter: number=0;
  constructor(private _employeeService: EmployeeService,private _router: Router,private _route: ActivatedRoute) { 
  }

  ngOnInit(): void {
      this.employees=this._employeeService.getEmployees();
      if(this._route.snapshot.queryParamMap.has("searchTerm")){
          this.searchTerm=this._route.snapshot.queryParamMap.get("searchTerm").toString();
      }
  }

  onClickRedirect(id:number){
    let route="employees/"+id;
    this._router.navigate([route],{
        queryParams: {"searchTerm":this.searchTerm}
    });
  }

  private filterEmployees(): Employee[]{
    this.filteredEmployees=[];
    this.employees.forEach(e=>{
        let employeeName=e.fullName.substring(0,this.searchTerm.length).toLowerCase();
        if(this.searchTerm.toLowerCase()===employeeName)
            this.filteredEmployees.push(e);
    })
    return this.filteredEmployees;
  }
  
  getEmployees() : Employee[]{
    if(this.searchTerm=="")
        return this.employees;
    else
        return this.filterEmployees();
  }

  

}
