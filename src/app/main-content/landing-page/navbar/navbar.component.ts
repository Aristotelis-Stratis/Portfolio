import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  transitionState: 'open' | 'close' | null = null;

  toggleMenu(): void {
    if (!this.isMenuOpen) {
      this.transitionState = 'open';
      setTimeout(() => {
        this.isMenuOpen = !this.isMenuOpen;
        this.transitionState = null;
      }, 100);
    } else {
      this.transitionState = 'close';
      setTimeout(() => {
        this.isMenuOpen = !this.isMenuOpen;
        this.transitionState = null;
      }, 100);
    }
  }
}
