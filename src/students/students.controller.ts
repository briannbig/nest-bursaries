import { Controller, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './students.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('students')
@ApiTags('students')
export class StudentsController {

    constructor(private readonly studentService: StudentsService) { }


    @Get()
    getAllStudents(): Student[] {
        return this.studentService.getAllStudents();
    }

    @Get('/:id')
    getStudentById(@Param('id') id: number): Student | undefined {
        return this.studentService.getStudentById(id);
    }

    @Get('/:admNumber')
    getStudentByAdmissionNumber(@Param('admNumber') admNumber: string): Student | undefined {
        return this.studentService.getStudentByAdmissionNumber(admNumber)
    }

}
