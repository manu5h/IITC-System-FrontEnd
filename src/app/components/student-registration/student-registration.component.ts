import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      NameWithInitials: ['', Validators.required],
      Address: ['', Validators.required],
      Mobile: ['', Validators.required],
      MISNumber: ['', Validators.required],
      NIC: ['', Validators.required],
      Gender: ['', Validators.required],
      DateEntered: ['']
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const currentDate = new Date().toISOString().slice(0, 10);
      console.log('Current Date:', currentDate);
      console.log('Form Data:', this.registrationForm.value);

      this.registrationForm.patchValue({ dateEntered: currentDate });
      this.studentService
        .registerStudent(this.registrationForm.value)
        .subscribe(
          () => {
            alert('Student registered successfully');
            this.registrationForm.reset();
          },
          (error) => {
            alert('Error registering student: ' + error.message);
            console.error('Error registering student:', error);
          }
        );
    }
  }
}
