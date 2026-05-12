import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X, BarChart3, Github, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly LogoIcon = BarChart3;
  readonly GithubIcon = Github;
  readonly LinkedinIcon = Linkedin;

  isScrolled = false;
  menuOpen = false;

  navLinks = [
    { label: 'Sobre Mí',    href: '#hero' },
    { label: 'Proyectos',   href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Formación',   href: '#education' },
    { label: 'Contacto',    href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.isScrolled = window.scrollY > 50; }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void  { this.menuOpen = false; }

  scrollTo(href: string): void {
    this.closeMenu();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
