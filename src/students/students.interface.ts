import { School } from "src/schools/schools.interface";

export interface Student {
    id: number,
    admissionNumber: string,
    firstName: string,
    surname?: string,
    school: School
}