import { Controller, Get, Param } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { School } from './schools.interface';
import { Student } from 'src/students/students.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('schools')
@ApiTags('schools')
export class SchoolsController {

    constructor(private readonly schoolsService: SchoolsService) {}
    

    @Get()
    getAllSchools(): School[] {
        return this.schoolsService.getAllSchools();
    }

    @Get('/:id')
    getSchoolById(@Param('id') id: number): School | undefined {
        return this.schoolsService.getSchoolById(id);
    }

    // @Get('/:id/students')
    // getStudentsBySchool(@Param('id') id: number): Student[] {
    //     return this.schoolsService.getStudentsBySchool(id);
    // }

}
