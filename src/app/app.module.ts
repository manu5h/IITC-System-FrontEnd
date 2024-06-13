import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin-login/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { CourseModuleCreateComponent } from './components/course-module-create/course-module-create.component';
import { EditStudentComponent } from './components/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDashboardComponent,
    StudentListComponent,
    StudentRegistrationComponent,
    CourseListComponent,
    CourseCreateComponent,
    CourseModuleCreateComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
