import { Injectable } from '@nestjs/common';
import { School } from './schools.interface';
import { faker } from '@faker-js/faker';

@Injectable()
export class SchoolsService {
    schools: School[] = []

    constructor() {
        for (let i = 1; i < 11; i++) {
            this.schools.push({
                id: i,
                name: faker.company.name(),
                county: faker.location.county()
            })
        }
    }


    getAllSchools(): School[] {
        return this.schools;
    }

    getSchoolById(id: number): School | undefined {
        return this.schools.find((s) => s.id === +id);
    }

}
