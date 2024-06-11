import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor() { }

  validateAdminLogin(event: Event) {
    event.preventDefault(); // Prevent form submission

    const email = (document.getElementById('form2Example1') as HTMLInputElement).value;
    const password = (document.getElementById('form2Example2') as HTMLInputElement).value;

    // Sample email and password
    const validEmail = "admin@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      window.location.href = '/adminDashboard';
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }

}
