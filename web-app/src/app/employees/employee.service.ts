import {Injectable} from "@angular/core";
import {Employee} from "../models/employee.model";

import { from, of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';

@Injectable()
export class EmployeeService{
    private listEmployees: Employee[]= [
        {
            id: 1,
            fullName: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: 'IT',
            isActive: true,
            photoPath: 'assets/images/mark.png',
            password:"test",
            confirmPassword:"test"
          },
          {
            id: 2,
            fullName: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dateOfBirth: new Date('11/20/1979'),
            department: 'HR',
            isActive: true,
            photoPath: 'assets/images/mary.png',
            password:"test",
            confirmPassword:"test"
          },
          {
            id: 3,
            fullName: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            dateOfBirth: new Date('3/25/1976'),
            department: 'IT',
            isActive: false,
            photoPath: 'assets/images/john.png',
            password:"test",
            confirmPassword:"test"
          },
      ];

    getEmployees(): Observable<Employee[]>{
        return of(this.listEmployees).pipe(delay(2000));
    }
    getEmployee(id: number):Employee{
        return this.listEmployees.find(e=>e.id === id);
    }
    saveEmployee(employee: Employee){
        employee.id=+this.listEmployees.length+1;
        this.listEmployees.push(employee);
        
    }
    editEmployee(employee: Employee) : Employee{
        let empInDb=this.getEmployee(employee.id);
        empInDb.fullName=employee.fullName;
        empInDb.email=employee.email;
        empInDb.department=employee.department;
        empInDb.gender=employee.gender;
        empInDb.contactPreference=employee.contactPreference;
        empInDb.phoneNumber=employee.phoneNumber;
        empInDb.isActive=employee.isActive;
        empInDb.password=employee.password;
        empInDb.confirmPassword=employee.confirmPassword;
        empInDb.photoPath=employee.photoPath;
        empInDb.dateOfBirth=employee.dateOfBirth;
        return empInDb;
    }

    deleteEmployee(id: number): void{
        let employee=this.getEmployee(id);
        let employeeIndex=this.listEmployees.indexOf(employee);
        this.listEmployees.splice(employeeIndex,1);
    }
    countEmployees() : number{
        return this.listEmployees.length;
    }


}