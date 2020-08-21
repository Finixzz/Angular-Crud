import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';


import {EmployeeService} from "../app/employees/employee.service";
import { DisplayEmployeeComponent } from './employees/display-employee/display-employee.component';

import {CreateEmployeeCanDeactivateGuardService} from "../app/employees/create-employee-can-deactivate-guard.service";
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

import { PipesModule } from "./Pipes/pipes.module"




const appRoutes: Routes=[
    {path: 'list',component:ListEmployeesComponent},
    {path: 'create',
     component:CreateEmployeeComponent,
     canDeactivate: [CreateEmployeeCanDeactivateGuardService]
    },
    {path: '', redirectTo:"/list", pathMatch:"full"},
    {path: "employees/:id",component: EmployeeDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    PipesModule
  ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent],
})
export class AppModule { }
