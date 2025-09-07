import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public sidebarOpen = false;
  public currentSection = 'home';

  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  fullPageScroll(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (this.sidebarOpen) this.sidebarOpen = false;
  }

  onClickedOutside(_: Event) {
    if (this.sidebarOpen) this.sidebarOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('.spy-section');
    let current = 'home';
    const scrollY = window.scrollY + 200; // margen para activar antes

    sections.forEach((section: any) => {
      if (scrollY >= section.offsetTop) {
        current = section.getAttribute('spyTarget');
      }
    });

    this.currentSection = current;
  }
}
