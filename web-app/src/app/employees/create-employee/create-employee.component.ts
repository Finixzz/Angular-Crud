import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

import {Employee} from 'src/app/models/employee.model';
import {Department} from 'src/app/models/depatment.model';

import { BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
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

  constructor() {
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

  saveEmployee(empForm: NgForm): void{
      console.log(this.empModel);
  }

  

}
