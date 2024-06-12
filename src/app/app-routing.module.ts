import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin-login/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path: 'adminDashboard', component: AdminDashboardComponent},
  { path: 'students', component: StudentListComponent },
  { path: 'student_registation', component: StudentRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

