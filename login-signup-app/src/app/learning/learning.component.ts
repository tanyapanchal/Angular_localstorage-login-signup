import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent {
  currentSkills: string[] = ['Angular', 'DSA'];
  pastSkills: string[] = ['MongoDb', 'JavaScript', 'React','NodeJs','GitHub'];

  logout() {
    // Implement your logout logic here
  }
}
