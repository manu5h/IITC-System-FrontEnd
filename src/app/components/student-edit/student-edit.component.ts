import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../student.service';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class EditStudentComponent implements OnInit {
  editForm: FormGroup;
  studentId: number | null = null;
  modulesList: any[] = []; 
  modulesAssignedToCourse: any[] = []; 

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    this.editForm = this.fb.group({
      studentId: [''],
      courseYear: ['', Validators.required],
      moduleId: ['', Validators.required],
      module1: [''],
      module1Marks: [''],
      module2: [''],
      module2Marks: [''],
      module3: [''],
      module3Marks: [''],
      dropout: [false],
      finalExamSitted: [false],
      repeatStudent: [false]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.studentId = id ? +id : null;

      if (this.studentId !== null) {
    
        this.studentService.getStudentById(this.studentId).subscribe(
          (data: any) => {
            this.editForm.patchValue(data); 
          },
          (error) => {
            console.error('Error fetching student details:', error);
          }
        );
      }

     
      this.studentService.getModulesList().subscribe(
        (data: any[]) => {
          this.modulesList = data;
        },
        (error) => {
          console.error('Error fetching modules list:', error);
        }
      );

      this.studentService.getModulesAssignedToCourse().subscribe(
        (data: any[]) => {
          this.modulesAssignedToCourse = data;
        },
        (error) => {
          console.error('Error fetching modules assigned to course:', error);
        }
      );
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      this.studentService.updateStudentDetails(formData).subscribe(
        () => {
          console.log('Student details updated successfully');
     
        },
        (error) => {
          console.error('Error updating student details:', error);
        }
      );
    }
  }
}
