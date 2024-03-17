import { Component } from '@angular/core';
import { NavbarComponent } from '../main-content/landing-page/navbar/navbar.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  
  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
