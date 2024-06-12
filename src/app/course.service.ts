import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:3000'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/courses`);
  }

  addCourse(courseData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/courses`, courseData); // Pass courseData as the second argument
  }

  
}
