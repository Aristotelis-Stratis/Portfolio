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
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      imageUrl: '/assets/img/projects/el_pollo_loco.png',
      liveTestUrl: 'https://live-test-url',
      githubUrl: 'https://github.com/Aristotelis-Stratis',
      flexDirection: 'row',
      textAlignment: 'left'
    },
    {
      title: 'JOIN',
      stack: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      imageUrl: '/assets/img/projects/el_pollo_loco.png',
      liveTestUrl: 'https://live-test-url',
      githubUrl: 'https://github.com/Aristotelis-Stratis',
      flexDirection: 'row-reverse',
      textAlignment: 'right'
    },
    {
      title: 'El Pollo Loco',
      stack: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      imageUrl: '/assets/img/projects/el_pollo_loco.png',
      liveTestUrl: 'https://live-test-url',
      githubUrl: 'https://github.com/Aristotelis-Stratis',
      flexDirection: 'row',
      textAlignment: 'left'
    },
    {
      title: 'JOIN',
      stack: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      imageUrl: '/assets/img/projects/el_pollo_loco.png',
      liveTestUrl: 'https://live-test-url',
      githubUrl: 'https://github.com/Aristotelis-Stratis',
      flexDirection: 'row-reverse',
      textAlignment: 'right'
    },
  ];
}
