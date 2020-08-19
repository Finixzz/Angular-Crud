import {Injectable} from "@angular/core";
import {Employee} from "../models/employee.model";

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

    getEmployees(): Employee[]{
        return this.listEmployees;
    }
    getEmployee(id: number):Employee{
        return this.listEmployees.find(e=>e.id === id);
    }
    saveEmployee(employee: Employee){
        this.listEmployees.push(employee);
        
    }


}