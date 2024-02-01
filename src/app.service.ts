import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  schools: School[] = []
  students: Student[] = []

  studentIdCounter = 1
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.schools.push({
        id: i,
        name: faker.company.name(),
        county: faker.location.county()
      })
    }

    this.schools.forEach(school => {
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

  getHello(): string {
    return 'Hello World!';
  }

  getAllSchools(): School[] {
    return this.schools;
  }

  getSchoolById(id: number): School | undefined {
    return this.schools.find((s) => s.id === +id);

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

    return this.students.filter((s) => s.school.id === +schoolId )
  }



}
