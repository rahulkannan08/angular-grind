import { Component } from '@angular/core';
import { Student } from '../models/student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-id-card',
  templateUrl: './student-id-card.html',
  styleUrl: './student-id-card.css',
  standalone: true,
  imports: [CommonModule]
})
export class StudentIdCardComponent {
  students: Student[] = [{
    collegeLogo: 'assets/logos/stc.png',
    studentPhoto: 'assets/students/student1.png',
    studentName: 'John Doe',
    rollNumber: '123456',
    department: 'Computer Science',
    year: 3,
    mobileNumber: '123-456-7890'
  },
    {
        collegeLogo: 'assets/logos/stc.png',
        studentPhoto: 'assets/students/student2.png',
        studentName: 'smith',
        rollNumber: '123457',
        department: 'aiml',
        year: 2,
        mobileNumber: '123-456-7234' 
    },
    {
        collegeLogo: 'assets/logos/stc.png',
        studentPhoto: 'assets/students/student3.png',
        studentName: 'jane',        
        rollNumber: '123458',
        department: 'civil',
        year: 4,
        mobileNumber: '123-456-7891'
    }];

    deleteStudent(rollNumber: string) {
  console.log('DELETE CLICKED:', rollNumber);

  this.students = this.students.filter(
    (s: Student) => s.rollNumber !== rollNumber
  );

  console.log('UPDATED LIST:', this.students);
}
}




