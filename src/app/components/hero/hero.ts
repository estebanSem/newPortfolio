import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronDown, Download, ExternalLink, Github, Linkedin, Database, Brain, Cpu } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly ChevronDownIcon = ChevronDown;
  readonly DownloadIcon = Download;
  readonly ExternalLinkIcon = ExternalLink;
  readonly GithubIcon = Github;
  readonly LinkedinIcon = Linkedin;
  readonly DatabaseIcon = Database;
  readonly BrainIcon = Brain;
  readonly CpuIcon = Cpu;

  titles = ['Data Scientist', 'Big Data Engineer', 'ML Specialist', 'Analytics Lead'];
  currentTitleIndex = 0;
  displayTitle = '';
  isDeleting = false;
  typingInterval: any;

  stats = [
    { value: '12+', label: 'Proyectos en Producción' },
    { value: '3B+', label: 'Registros Procesados' },
    { value: '94%', label: 'Precisión Media en Modelos' },
    { value: '8',   label: 'Años de Experiencia' },
  ];

  skills = [
    { icon: this.DatabaseIcon, label: 'Big Data & ETL' },
    { icon: this.BrainIcon,    label: 'Machine Learning' },
    { icon: this.CpuIcon,      label: 'MLOps & Cloud' },
  ];

  ngOnInit(): void { this.startTyping(); }
  ngOnDestroy(): void { clearInterval(this.typingInterval); }

  startTyping(): void {
    const current = this.titles[this.currentTitleIndex];
    let i = 0;
    const type = () => {
      if (!this.isDeleting && i <= current.length) {
        this.displayTitle = current.slice(0, i++);
        setTimeout(type, 90);
      } else if (!this.isDeleting && i > current.length) {
        setTimeout(() => { this.isDeleting = true; type(); }, 2200);
      } else if (this.isDeleting && i > 0) {
        this.displayTitle = current.slice(0, --i);
        setTimeout(type, 45);
      } else {
        this.isDeleting = false;
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
        setTimeout(() => this.startTyping(), 300);
      }
    };
    type();
  }

  scrollTo(href: string): void {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
