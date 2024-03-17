import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})

export class ProjectComponent {
  @Input() project: any;

  constructor(private translate: TranslateService) {}

  goToUrl(url: string): void {
    window.open(url, '_blank');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
