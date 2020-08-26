import { Component, OnInit, Input} from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import {Router} from "@angular/router";
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTerm: string;
  constructor(private _router: Router) { }

  

  ngOnInit(): void {
  }

  viewEmployee(){
      this._router.navigate(["/employees",this.employee.id],{
          queryParams: {"searchTerm": this.searchTerm}
      });
  }


}
