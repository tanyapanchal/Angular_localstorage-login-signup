import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  courses: string[] = ['Course 1', 'Course 2', 'Course 3', 'Course 4'];
  currentSkills: string[] = ['Skill 1', 'Skill 2', 'Skill 3'];
  pastSkills: string[] = ['Skill A', 'Skill B', 'Skill C'];

  logout() {
    // Implement your logout logic here
  }
}
