import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {ActivatedRoute,Router} from "@angular/router"
import {Employee} from 'src/app/models/employee.model';
import { Department } from 'src/app/models/depatment.model';

import { BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
    preview: boolean;
  empModel: Employee;
  datePickerConfig: Partial<BsDaterangepickerConfig>;
  departments: Department[]=[
    new Department(1,'Help Desk'),
    new Department(2,"HR"),
    new Department(3,"IT"),
    new Department(4,"Payroll"),
    new Department(5,"Admin")
];


  constructor(private _employeeService: EmployeeService,private _route: ActivatedRoute,private _router: Router) {

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
      this.empModel=this._employeeService.getEmployee(employeeId);
      
  }

  togglePhotoPreview(){
    if(this.empModel.photoPath!="" && this.empModel.photoPath!=null)
         this.preview=!this.preview;
}

  saveChanges(){
      this._employeeService.editEmployee(this.empModel);
      this._router.navigate(["employees",this.empModel.id],{
          queryParamsHandling: "preserve"
      });

  }

}
