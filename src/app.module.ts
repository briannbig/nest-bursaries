import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { SchoolsModule } from './schools/schools.module';
import { SchoolsService } from './schools/schools.service';


@Module({
  imports: [StudentsModule, SchoolsModule],
  controllers: [AppController],
  providers: [AppService, SchoolsService],
})
export class AppModule {}
