export interface EmployeeDetails {
    id : number;
    name: string;
    department: string;
    salary: number;
}

export class Employee implements EmployeeDetails {
    constructor( public id: number, public name: string, public department: string, public salary: number) {}

    calculateBonus(): number {
        return this.salary * 0.1; // Example bonus calculation (10% of salary) 
    }
}

