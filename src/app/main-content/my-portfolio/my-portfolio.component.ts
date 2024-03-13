import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss']
})
export class MyPortfolioComponent {
  // Placeholder
  projects = [
    {
      title: 'El Pollo Loco',
      stack: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the chicken attacking the village.',
      imageUrl: '/assets/img/projects/el_pollo_loco.png',
      liveTestUrl: 'https://live-test-url',
      githubUrl: 'https://github.com/Aristotelis-Stratis/El-Pollo-Loco',
      flexDirection: 'row',
      textAlignment: 'left'
    },
    {
      title: 'JOIN (PH)',
      stack: 'JavaScript | HTML | CSS',
      description: 'Enhance productivity with a Kanban-inspired task manager. Easily create tasks, drag and drop to organize, assign users, and categorize for streamlined project tracking.',
      imageUrl: '/assets/img/projects/JOIN.png',
      liveTestUrl: 'https://live-test-url',
      githubUrl: 'https://github.com/Aristotelis-Stratis',
      flexDirection: 'row-reverse',
      textAlignment: 'right'
    },
    {
      title: 'Simple CRM (PH)',
      stack: 'Angular | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality',
      imageUrl: '/assets/img/projects/simple_CRM.png',
      liveTestUrl: 'https://live-test-url',
      githubUrl: 'https://github.com/Aristotelis-Stratis',
      flexDirection: 'row',
      textAlignment: 'left'
    }
  ];
}
