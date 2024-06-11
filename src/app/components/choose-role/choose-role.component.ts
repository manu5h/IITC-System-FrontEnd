import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-role',
  templateUrl: './choose-role.component.html',
  styleUrls: ['./choose-role.component.css']
})
export class ChooseRoleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(role: string): void {
    if (role === 'student') {
      this.router.navigate(['/student']);
    } else if (role === 'admin') {
      this.router.navigate(['/admin']);
    }
  }

}
