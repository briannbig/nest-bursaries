import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { SchoolsModule } from 'src/schools/schools.module';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [SchoolsModule],
  exports: [SchoolsModule]
})
export class StudentsModule {}
