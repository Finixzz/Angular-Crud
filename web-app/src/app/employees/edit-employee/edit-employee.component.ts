import { Component, OnInit,ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {ActivatedRoute,Router} from "@angular/router"
import {Employee} from 'src/app/models/employee.model';
import { Department } from 'src/app/models/depatment.model';

import {NgForm} from "@angular/forms";

import { BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
    @ViewChild("employeeForm") public editEmployeeForm: NgForm;
  preview: boolean;
  empModel: Employee;
  empModelOriginal: Employee;
  datePickerConfig: Partial<BsDaterangepickerConfig>;
  saveChagnesButtonClicked: number;
  departments: Department[]=[
    new Department(1,'Help Desk'),
    new Department(2,"HR"),
    new Department(3,"IT"),
    new Department(4,"Payroll"),
    new Department(5,"Admin")
];


  constructor(private _employeeService: EmployeeService,private _route: ActivatedRoute,private _router: Router) {
    this.saveChagnesButtonClicked=0;
    this.datePickerConfig=Object.assign({},
        {
            containerClass:"theme-dark-blue",
            showWeekNumbers: false,
            dateInputFormat:"DD/MM/YYYY"
        });
    this.preview=false;
   }

  ngOnInit(): void {
      const employeeId=+this._route.snapshot.paramMap.get("id");
      this.empModel=Object.assign({},this._employeeService.getEmployee(employeeId));
      this.empModelOriginal=Object.assign({},this.empModel);
      
  }

  

  togglePhotoPreview(){
    if(this.empModel.photoPath!="" && this.empModel.photoPath!=null)
         this.preview=!this.preview;
    }

  saveChanges(){
      this.saveChagnesButtonClicked++;
      this._employeeService.editEmployee(this.empModel);
      this._router.navigate(["employees",this.empModel.id],{
          queryParamsHandling: "preserve"
      });

  }



}
