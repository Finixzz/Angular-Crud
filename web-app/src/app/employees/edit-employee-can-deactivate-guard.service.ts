import {CanDeactivate } from "@angular/router"
import { EditEmployeeComponent } from '../employees/edit-employee/edit-employee.component'
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable()
export class EditEmployeeCanDeactivateGuardService  implements CanDeactivate<EditEmployeeComponent>{

    canDeactivate(component: EditEmployeeComponent): boolean{
        if(JSON.stringify(component.empModel)!==JSON.stringify(component.empModelOriginal) && component.saveChagnesButtonClicked==0)
            if((confirm("Are you sure you want to discard your changes?"))){
                component.empModel=Object.assign({},component.empModelOriginal);
                return true;
            }else{
                return false;
            }
        return true; 
    }
}