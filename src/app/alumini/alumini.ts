import { Component } from '@angular/core';
import { Alumini } from '../models/alumiti.model';

@Component({
  selector: 'app-alumini',
  imports: [],
  standalone: true,
  templateUrl: './alumini.html',
  // styleUrl: './alumini.css',
})
export class Aluminii {
  aluminis: Alumini[] = [{
    name: 'John Doe',
    department: 'Computer Science',
    yearOfPassing: 2020
  },
  
  {
    name: 'Jane Smith',
    department: 'Electrical Engineering',
    yearOfPassing: 2019
  },
  {
    name: 'Michael Johnson',
    department: 'Mechanical Engineering',
    yearOfPassing: 2021
  },
  {
    name: 'Emily Davis',
    department: 'Civil Engineering',
    yearOfPassing: 2018
  },
  {
    name: 'David Wilson',
    department: 'Chemical Engineering',
    yearOfPassing: 2022
  }
  ];
}
