import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';

import { StudentIdCardComponent } from './student-id-card/student-id-card';
import { Aluminii } from "./alumini/alumini";
import { NewEmployee } from './new_employee/NewEmployee';
import { HardCoded } from './hard-coded/hard-coded';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentIdCardComponent, Aluminii, NewEmployee, HardCoded],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {


  employees: Employee[] = [];

  employee: Employee = {
    id: 0,
    name: '',
    department: '',
    salary: 0
  };

  isEditMode = false;

  constructor(private employeeService: EmployeeService) {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = (this.employeeService as any).getEmployees?.() ?? [];
  }

  addEmployee(): void {
    // helper: prevent duplicate submit causing unexpected UI issues

    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employee);

      this.isEditMode = false;
    } else {
      this.employeeService.addEmployee(this.employee);
    }

    this.resetForm();
    this.loadEmployees();
  }


  editEmployee(emp: Employee): void {

    this.employee = {
      ...emp
    };

    this.isEditMode = true;
  }

  deleteEmployee(id: number): void {

    (this.employeeService as any).deleteEmployee?.(id);

    this.loadEmployees();
  }

  calculateBonus(salary: number): number {
    return (this.employeeService as any).calculateBonus?.(salary) ?? 0;
  }

  resetForm(): void {

    this.employee = {
      id: 0,
      name: '',
      department: '',
      salary: 0
    };
  }
}