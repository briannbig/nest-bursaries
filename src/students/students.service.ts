import { Injectable } from '@nestjs/common';
import { Student } from './students.interface';
import { SchoolsService } from 'src/schools/schools.service';
import { faker } from '@faker-js/faker';

@Injectable()
export class StudentsService {

    students: Student[] = []

    studentIdCounter = 1

    constructor(private schoolService: SchoolsService) {
        schoolService.getAllSchools().forEach(school => {
            for (let j = 0; j < 10; j++) {
                this.students.push({
                    id: this.studentIdCounter,
                    admissionNumber: school.id + "_" + this.studentIdCounter,
                    firstName: faker.person.firstName(),
                    surname: faker.person.lastName(),
                    school: school
                })
                this.studentIdCounter++;
            }
        });
    }

    getAllStudents(): Student[] {
        return this.students;
    }

    getStudentById(studentId: number): Student | undefined {
        return this.students.find(s => s.id === +studentId)
    }

    getStudentByAdmissionNumber(admissionNumber: string): Student | undefined {
        return this.students.find(s => s.admissionNumber === admissionNumber)
    }

    getStudentsBySchool(schoolId: number): Student[] {
        console.log("filtering school: " + schoolId);
        console.log(typeof (schoolId));

        return this.students.filter((s) => s.school.id === +schoolId)
    }


}
