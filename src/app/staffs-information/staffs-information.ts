import { Component } from '@angular/core';
import { Staffs } from '../models/staffs.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-staffs-information',
  templateUrl: './staffs-information.html',
  styleUrl: './staffs-information.css',
  standalone: true,
  imports: [CommonModule]
})

export class StaffsInformation {
  staffs: Staffs[] = [
    { id: 1, name: 'John Doe', salary: 50000 },
    { id: 2, name: 'Jane Smith', salary: 60000 },
    { id: 3, name: 'Mike Johnson', salary: 55000 }
  ];
}