import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-employee',
    templateUrl: './NewEmployee.html',
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class NewEmployee {
    employeename: string = '';
    sucessMessage: string = '';
    employ: { name: string }[] = [];

    register() {
        if (!this.employeename) {
            this.sucessMessage = 'please enter employee name to register';
            return;
        }

        this.employ.push({
            name: this.employeename
        });
        this.sucessMessage = `Employee '${this.employeename}' registered successfully`;

        this.employeename = '';
    }


    isdisabled: boolean = true;
    message: string = '';

    toggleButton() {
        this.isdisabled = !this.isdisabled;
    }

    showMessage() {
        this.message = 'Button Clicked!';
    }
}