import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/students`);
  }

  registerStudent(studentData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/students`, studentData);
  }
  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }

  updateStudent(student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/students/${student.id}`, student);
  }
  getStudentById(studentId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/students/${studentId}`);
  }

  getModulesList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/modules`);
  }

  getModulesAssignedToCourse(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/modules/assigned`);
  }

  updateStudentDetails(studentData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/students/${studentData.studentId}`, studentData);
  }
  
}
