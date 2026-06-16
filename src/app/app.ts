import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  StudentIdCardComponent } from './student-id-card/student-id-card';
import { StaffsInformation } from  './staffs-information/staffs-information';
import { Employee } from './employee/emloyeee';
import { EmployeeService } from './employee/employeeService';


const employeeService = new EmployeeService();


const emp1 = new Employee(1, 'John Doe', 'IT', 50000);
const emp2 = new Employee(2, 'Jane Smith', 'HR', 60000);  
employeeService.addEmployee(emp1);
employeeService.addEmployee(emp2);
employeeService.updateEmployee(1, 'John Doe', 'IT', 55000);
employeeService.displayEmployees();


employeeService.updateEmployee(2, 'Non Existent', 'Finance', 70000);

employeeService.displayEmployees();

@Component({
  selector: 'app-root',
  imports: [StudentIdCardComponent, StaffsInformation],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('student-management');
}
//  