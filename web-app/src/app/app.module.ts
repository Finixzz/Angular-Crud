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

import { EmployeeListResolverService } from "./employees/employee-list-resolver.service";

import { PageNotFoundComponent } from "./page-not-found.component";

import { EmployeeDetailsGuardService } from "./employees/employee-details-guard.service";
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { EditEmployeeCanDeactivateGuardService } from "./employees/edit-employee-can-deactivate-guard.service";

const appRoutes: Routes=[
    {
        path: 'list',
        component:ListEmployeesComponent,
        resolve:{employeeList: EmployeeListResolverService}
    },
    {
        path: 'create',
        component:CreateEmployeeComponent,
        canDeactivate: [CreateEmployeeCanDeactivateGuardService]
    },
    {
        path: '',
        redirectTo:"/list",
        pathMatch:"full"
    },
    {
        path: "employees/:id",
        component: EmployeeDetailsComponent,
        canActivate: [EmployeeDetailsGuardService]
    },
    {
        path: "notfound",
        component: PageNotFoundComponent
    },
    {
        path:"employees/edit/:id",
        component: EditEmployeeComponent,
        canActivate: [EmployeeDetailsGuardService],
        canDeactivate: [EditEmployeeCanDeactivateGuardService]
    }
    
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    PipesModule
  ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService,EmployeeListResolverService,EmployeeDetailsGuardService,EditEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent],
})
export class AppModule { }
