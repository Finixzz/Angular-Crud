import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

import {Employee} from 'src/app/models/employee.model';
import {Department} from 'src/app/models/depatment.model';

import { BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from '../employee.service';

import {Router} from "@angular/router";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild("employeeForm") public createEmployeeForm: NgForm;
  
  preview: boolean;
  datePickerConfig: Partial<BsDaterangepickerConfig>;
  empModel : Employee;
  departments: Department[]=[
      new Department(1,'Help Desk'),
      new Department(2,"HR"),
      new Department(3,"IT"),
      new Department(4,"Payroll"),
      new Department(5,"Admin")
  ]

  constructor(private _employeeService: EmployeeService,
              private _router: Router) {
        this.empModel=new Employee();
        this.datePickerConfig=Object.assign({},
            {
                containerClass:"theme-dark-blue",
                showWeekNumbers: false,
                dateInputFormat:"DD/MM/YYYY"
            });
        this.preview=false;
   }

   togglePhotoPreview(){
       if(this.empModel.photoPath!="" && this.empModel.photoPath!=null)
            this.preview=!this.preview;
   }

  ngOnInit(): void {

  }

  saveEmployee(): void{
      const newEmployee:Employee=Object.assign({},this.empModel);
      this._employeeService.saveEmployee(newEmployee);
      this.createEmployeeForm.reset();
      this._router.navigate(["list"]);
  }

  

}
