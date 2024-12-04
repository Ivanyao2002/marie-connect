import {Component, HostListener} from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';
import {FooterComponent} from '../../shared/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTopButton = document.getElementById('scroll-top');
    if (window.scrollY > 300) {
      scrollTopButton?.classList.add('show');
    } else {
      scrollTopButton?.classList.remove('show');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
