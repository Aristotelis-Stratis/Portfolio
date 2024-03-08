import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importiere CommonModule

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project: any;

  goToUrl(url: string): void {
    window.open(url, '_blank');
  }
}