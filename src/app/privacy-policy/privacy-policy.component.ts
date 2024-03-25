import { Component } from '@angular/core';
import { NavbarComponent } from '../main-content/landing-page/navbar/navbar.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent, TranslateModule, NgFor],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(private translate: TranslateService) { }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
