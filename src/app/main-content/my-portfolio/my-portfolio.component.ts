import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent, TranslateModule],
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss'],
})
export class MyPortfolioComponent implements OnInit {

  projects: any[] = [];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.loadProjects();
  }


  loadProjects(): void {
    this.projects = [
      {
        title: this.translate.instant('PROJECTS.EL_POLLO_LOCO.TITLE'),
        stack: this.translate.instant('PROJECTS.EL_POLLO_LOCO.STACK'),
        description: this.translate.instant('PROJECTS.EL_POLLO_LOCO.DESCRIPTION'),
        imageUrl: '/assets/img/projects/el_pollo_loco.png',
        liveTestUrl: 'https://el-pollo-loco.aristotelis-stratis.com/',
        githubUrl: 'https://github.com/Aristotelis-Stratis/El-Pollo-Loco',
        flexDirection: 'row',
        textAlignment: 'left',
        isWIP: false
      },
      {
        title: this.translate.instant('PROJECTS.JOIN.TITLE'),
        stack: this.translate.instant('PROJECTS.JOIN.STACK'),
        description: this.translate.instant('PROJECTS.JOIN.DESCRIPTION'),
        imageUrl: '/assets/img/projects/JOIN.png',
        liveTestUrl: 'https://join.aristotelis-stratis.com/login.html',
        githubUrl: 'https://github.com/Aristotelis-Stratis/JOIN',
        flexDirection: 'row-reverse',
        textAlignment: 'right',
        isWIP: false
      },
      {
        title: this.translate.instant('PROJECTS.DABUBBLE.TITLE'),
        stack: this.translate.instant('PROJECTS.DABUBBLE.STACK'),
        description: this.translate.instant('PROJECTS.DABUBBLE.DESCRIPTION'),
        imageUrl: '/assets/img/projects/DaBubble.png',
        liveTestUrl: 'https://dabubble.aristotelis-stratis.com/',
        githubUrl: 'https://github.com/Aristotelis-Stratis/DABubble',
        flexDirection: 'row',
        textAlignment: 'left',
        isWIP: false
      }
    ];
  }

  
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}