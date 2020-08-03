
import {Department} from "src/app/models/depatment.model";

export class Employee{
    id: number;
    fullName: string;
    gender: string;
    email?: string;
    phoneNumber?: number;
    contactPreference: string;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: string;

    /**
     *
     */
    constructor() {
        this.id=null;
        this.fullName=null;
        this.gender=null;
        this.email=null;
        this.phoneNumber=null;
        this.contactPreference=null;
        this.dateOfBirth=null;
        this.department=null;
        this.isActive=null;
        this.photoPath=null;

    }
}