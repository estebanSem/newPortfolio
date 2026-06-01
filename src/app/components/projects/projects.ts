import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, ExternalLink, Star, GitFork } from 'lucide-angular';

export interface Project {
  title: string;
  description: string;
  en_proceso: boolean;
  longDesc: string;
  stack: string[];
  category: string;
  stars: number;
  forks: number;
  githubUrl: string;
  colabUrl?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent implements AfterViewInit {
  readonly GithubIcon = Github;
  readonly ExternalLinkIcon = ExternalLink;
  readonly StarIcon = Star;
  readonly GitForkIcon = GitFork;

  activeFilter = 'Todos';
  filters = ['Todos', 'ML/IA', 'Big Data', 'Visualización', 'NLP'];

  projects: Project[] = [
    {
      title: 'Pipeline de Predicción de Churn',
      description: 'Arquitectura end-to-end para predicción de abandono en tiempo real',
      longDesc: 'Sistema de machine learning en producción que procesa +2M eventos diarios. Incluye feature engineering automático, retraining programado y monitorización de drift con MLflow y Evidently.',
      stack: ['Python', 'Scikit-learn', 'MLflow','DVC','Dagster', 'Evidently'],
      category: 'ML/IA', stars: 248, forks: 67,
      githubUrl: 'https://github.com/estebanSem/07-mlops-full-stack', featured: true, en_proceso: false
    },
    {
      title: 'Sistema de Monitorización Meteorológica',
      description: 'Simulación de un flujo de ingesta y procesamiento dedatos en un entorno Big Data de extremo a extremo.',
      longDesc: 'Simulación de un flujo de ingesta y procesamiento de datos en un entorno Big Data de extremo a extremo.',
      stack: ['Python', 'Kafka', 'Docker', 'Flink', 'Sink/Source Connectors'],
      category: 'Visualización', stars: 129, forks: 28, en_proceso: false,
      githubUrl: 'https://github.com/estebanSem/04-monitorizacion-meteorologica', colabUrl: '#',
    },
    {
      title: 'Sistema de reconocimiento de gestos',
      description: 'Detección de sentimiento y categorización en 7 idiomas',
      longDesc: 'diseño y entrenamiento de modelos de Deep Learning para reconocimiento de gestos en Lengua de Signos Española',
      stack: ['PyTorch', 'MLFlow', 'Dagster', 'Dagshub', 'MediaPipe', 'FastAPI', 'ONNX'],
      category: 'NLP', stars: 204, forks: 55,
      githubUrl: 'https://github.com/estebanSem/reconocimiento-gestos', colabUrl: '#', en_proceso: false
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'Todos') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(f: string): void { this.activeFilter = f; }

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('#projects .reveal').forEach(el => obs.observe(el));
  }
}
