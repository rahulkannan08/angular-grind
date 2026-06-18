import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  updateEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex(
      emp => emp.id === updatedEmployee.id
    );

    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(
      emp => emp.id !== id
    );
  }

  calculateBonus(salary: number): number {
    return salary * 0.1;
  }
}