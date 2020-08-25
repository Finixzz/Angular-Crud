import { Component, OnInit } from '@angular/core';

import {Employee} from 'src/app/models/employee.model';

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
  constructor(private _router: Router,private _route: ActivatedRoute) { 
      this.employees=this._route.snapshot.data["employeeList"];
      if(this._route.snapshot.queryParamMap.has("searchTerm")){
            this.searchTerm=this._route.snapshot.queryParamMap.get("searchTerm").toString();
        }
  }

  ngOnInit(): void {
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
