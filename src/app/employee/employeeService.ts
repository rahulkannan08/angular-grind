import { Employee } from "./emloyeee";

export class EmployeeService {
    private employees: Employee[] = [];



    addEmployee(employee: Employee): void {
        this.employees.push(employee);
        console.log(`Employee ${employee.name} added successfully.`);
    }

    updateEmployee(
        id: number, 
        name?: string,
        department?: string,
        salary?: number
    ): void {
        const employee = this.employees.find(emp => emp.id === id);

        if(!employee) {
            console.log(`Employee with ID ${id} not found.`);
            return; 
        }

        if(name) employee.name= name; 
        if(department) employee.department = department;
        if(salary) employee.salary = salary;

        console.log(`Employee with ID ${id} updated successfully.`);
    }

    displayEmployees(): void{
        console.log("Employee List:");
        this.employees.forEach(e => {
            console.log(`ID: ${e.id}, 
                Name: ${e.name}, 
                Department: ${e.department},
                 Salary: ${e.salary},
                  Bonus: ${e.calculateBonus()}`);
        });
    }
}
