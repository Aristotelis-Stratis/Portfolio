import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills = [
    { name: 'Angular', icon: 'Angular.png' },
    { name: 'TypeScript', icon: 'TypeScript.png' },
    { name: 'JavaScript', icon: 'JavaScript.png' },
    { name: 'HTML', icon: 'HTML.png' },
    { name: 'Firebase', icon: 'Firebase.png' },
    { name: 'Git', icon: 'Git.png' },
    { name: 'CSS', icon: 'CSS.png' },
    { name: 'Rest-Api', icon: 'Api.png' },
    { name: 'Scrum', icon: 'Scrum.png' },
    { name: 'Material design', icon: 'MaterialDesign.png' }
  ];
}
