import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  transitionState: 'open' | 'close' | null = null;

  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

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

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.transitionState = 'close';
      setTimeout(() => {
        this.isMenuOpen = false;
        this.transitionState = null;
      }, 100);
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
