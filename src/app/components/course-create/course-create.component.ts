import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css'],
})
export class CourseCreateComponent implements OnInit {
  courseForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      courseType: ['', Validators.required],
      duration: ['', Validators.required],
      medium: ['', Validators.required],
      courseLevel: ['', Validators.required],
      moduleCode: ['', [Validators.required, this.moduleCodeValidator]],
      dateEntered: [''],
    });
  }

  
  moduleCodeValidator(control: AbstractControl): ValidationErrors | null {
    const moduleCodePattern = /^[A-Z]{3}[0-9]{4}$/;
    if (!moduleCodePattern.test(control.value)) {
      return { invalidModuleCode: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const currentDate = new Date().toISOString().slice(0, 10);
      const formData = { ...this.courseForm.value, dateEntered: currentDate };
  
      console.log('Form Data:', formData); 
  
      this.courseService.addCourse(formData).subscribe(
        response => {
          alert('Course added successfully');
          this.courseForm.reset();
        },
        error => {
          alert('Error adding course: ' + error.message);
          console.error('Error adding course:', error);
        }
      );
    }
  }
  
}
