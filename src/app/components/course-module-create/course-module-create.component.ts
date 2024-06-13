import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-course-module-create',
  templateUrl: './course-module-create.component.html',
  styleUrls: ['./course-module-create.component.css']
})
export class CourseModuleCreateComponent implements OnInit {
  moduleForm!: FormGroup;
  courses: any[] = [];

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {}

  ngOnInit(): void {
    this.moduleForm = this.formBuilder.group({
      course: ['', Validators.required],
      moduleName: ['', Validators.required],
      dateEntered: ['']
    });

    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (data: any[]) => {
        this.courses = data;
      },
      error => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.moduleForm.valid) {
      const currentDate = new Date().toISOString().slice(0, 10);
      const formData = {
        moduleName: this.moduleForm.value.moduleName,
        moduleCode: this.moduleForm.value.course.ModuleCode,
        dateEntered: currentDate
      };

      this.courseService.addCourseModule(formData).subscribe(
        response => {
          alert('Course module added successfully');
          this.moduleForm.reset();
        },
        error => {
          alert('Error adding course module: ' + error.message);
          console.error('Error adding course module:', error);
        }
      );
    }
  }
}
