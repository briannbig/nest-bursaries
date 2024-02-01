interface School {
    id: number,
    name: string,
    county: string,
}

interface Student {
    id: number,
    admissionNumber: string,
    firstName: string,
    surname?: string,
    school: School
}