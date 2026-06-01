import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Calendar, ArrowUpRight } from 'lucide-angular';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
  stack: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
})
export class ExperienceComponent implements AfterViewInit {
  readonly MapPinIcon = MapPin;
  readonly CalendarIcon = Calendar;
  readonly ArrowUpRightIcon = ArrowUpRight;

  experiences: Experience[] = [
    {
      role: 'Desarrollador Web',
      company: 'Geonet Territorial',
      location: 'Alicante, España',
      period: 'Ene 2023 — Presente',
      current: true,
      highlights: [
        'Desarrollo de evolutivos , componentes y nuevas funcionalidades en aplicacion web con Angular',
        'Correccion de incidencias prioritarias',
        'Gestion de BBDD',
        'Optimizacion de consultas complejas',
      ],
      stack: ['Angular', 'JavaScript', 'PL/SQL', 'Git'],
    },
    {
      role: 'Desarrollador Web - Becario',
      company: 'NTT DATA',
      location: 'Alicante, España',
      period: 'Feb 2023 — Jun 2023',
      current: false,
      highlights: [
        'Desarrollo de nuevos componentes para webs Sharepoints',
        'Mantenimiento de aplicaciones en Power Platform',
        'Resolucion de incidencias diarias',
      ],
      stack: ['React', 'SPFx', 'Sharepoint', 'Power Automate'],
    },
  ];

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('#experience .reveal').forEach(el => obs.observe(el));
  }
}
