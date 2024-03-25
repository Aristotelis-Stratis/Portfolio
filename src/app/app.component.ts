import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import Aos from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MainContentComponent,
    ImprintComponent,
    FooterComponent,
    PrivacyPolicyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    Aos.init();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
