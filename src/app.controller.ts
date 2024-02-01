import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/schools')
  getAllSchools(): School[] {
    return this.appService.getAllSchools();
  }

  @Get('/schools/:id')
  getSchoolById(@Param('id') id: number): School | undefined {
    return this.appService.getSchoolById(id);
  }

  @Get('/schools/:id/students')
  getStudentsBySchool(@Param('id') id: number): Student[] {
    return this.appService.getStudentsBySchool(id);
  }



  @Get('/students')
  getAllStudents(): Student[] {
    return this.appService.getAllStudents();
  }

  @Get('/students/:id')
  getStudentById(@Param('id') id: number): Student | undefined {
    return this.appService.getStudentById(id);
  }

  @Get('/schools/:admNumber')
  getSchoolByAdmissionNumber(@Param('admNumber') admNumber: string): Student | undefined {
    return this.appService.getStudentByAdmissionNumber(admNumber)
  }
}
