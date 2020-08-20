import {PipeTransform, Pipe} from "@angular/core"
import {Employee} from "../models/employee.model";

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform{
    transform(employees: Employee[],searchTerm: string): Employee[]{
        if(!employees || !searchTerm){
            return employees;
        }
        let employeesThatMatchSearchTerm:Employee[]= [];
        employees.forEach(e=>{
            let empName=e.fullName.substring(0,searchTerm.length).toLowerCase();
            if(empName==searchTerm.toLowerCase())
                employeesThatMatchSearchTerm.push(e);
        })
        return employeesThatMatchSearchTerm;
    }
}