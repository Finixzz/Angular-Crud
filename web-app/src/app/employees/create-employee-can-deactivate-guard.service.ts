import {CanDeactivate} from "@angular/router";
import {CreateEmployeeComponent } from "./create-employee/create-employee.component";

export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent):boolean{
        if(component.createEmployeeForm.dirty){
            return confirm("Are you sure you want to discard your changes?")
        }
        return true;
    }

}