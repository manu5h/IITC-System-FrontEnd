import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin-login/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseCreateComponent} from './components/course-create/course-create.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path: 'adminDashboard', component: AdminDashboardComponent},
  { path: 'students', component: StudentListComponent },
  { path: 'student_registation', component: StudentRegistrationComponent },
  { path: 'course_list', component: CourseListComponent },
  { path: 'create-course', component: CourseCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

