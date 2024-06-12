import { Component } from '@angular/core';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.css']
})
export class TechstackComponent {
  courses: string[] = ['Masters in Computer Science.', 'Course : MERN Stack development.', 'Participation in Agile activity.', 'JavaScript Course from udemy.'];

  logout() {
    // Implement your logout logic here
  }
}
