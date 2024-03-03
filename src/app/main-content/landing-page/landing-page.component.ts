import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
  <section>
    <div><app-navbar></app-navbar></div>
    <h1 class="fontPoppins">Aristotelis Stratis</h1>
    <h2 class="fontPoppins">Frontend Developer</h2>
  </section>
  `,
  // templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {


}
