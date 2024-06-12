import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [DatePipe]

})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.fetchStudents(); // Fetch students data when the component initializes
  }

  fetchStudents() {
    this.studentService.getAllStudents().subscribe(
      (students: any[]) => {
        this.students = students; // Assign the fetched students to the component property
      },
      error => console.error('Error fetching student data:', error)
    );
  }
}
