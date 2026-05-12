import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, ExternalLink, Star, GitFork } from 'lucide-angular';

export interface Project {
  title: string;
  description: string;
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
      stack: ['Python', 'PySpark', 'MLflow', 'Kafka', 'GCP'],
      category: 'ML/IA', stars: 248, forks: 67,
      githubUrl: '#', featured: true,
    },
    {
      title: 'Motor de Recomendación Colaborativo',
      description: 'Sistema de recomendación híbrido para plataforma de e-commerce',
      longDesc: 'Modelo matricial con filtrado colaborativo y basado en contenido. A/B testing integrado. Mejora del 34% en CTR respecto al baseline.',
      stack: ['Python', 'Spark ALS', 'Redis', 'FastAPI', 'Docker'],
      category: 'ML/IA', stars: 183, forks: 41,
      githubUrl: '#', colabUrl: '#',
    },
    {
      title: 'Lakehouse Analytics con Delta Lake',
      description: 'Arquitectura medallion (Bronze/Silver/Gold) sobre Delta Lake',
      longDesc: 'Diseño e implementación de Data Lakehouse con versionado de datos, time travel y optimización automática de compaction. Procesamiento de 500GB/día.',
      stack: ['Databricks', 'Delta Lake', 'Spark', 'dbt', 'Airflow'],
      category: 'Big Data', stars: 317, forks: 89,
      githubUrl: '#', featured: true,
    },
    {
      title: 'Dashboard de Análisis Geoespacial',
      description: 'Visualización interactiva de patrones de movilidad urbana',
      longDesc: 'Análisis de 80M de trayectorias GPS para identificar patrones de tráfico y optimización de rutas. Visualizaciones dinámicas con Kepler.gl.',
      stack: ['Python', 'Geopandas', 'Kepler.gl', 'PostGIS', 'Streamlit'],
      category: 'Visualización', stars: 129, forks: 28,
      githubUrl: '#', colabUrl: '#',
    },
    {
      title: 'Clasificador NLP Multilenguaje',
      description: 'Detección de sentimiento y categorización en 7 idiomas',
      longDesc: 'Fine-tuning de modelos transformer (XLM-RoBERTa) para clasificación de texto en dominios específicos. 91.4% F1-score en benchmark interno.',
      stack: ['PyTorch', 'HuggingFace', 'SpaCy', 'FastAPI', 'ONNX'],
      category: 'NLP', stars: 204, forks: 55,
      githubUrl: '#', colabUrl: '#',
    },
    {
      title: 'Plataforma de Monitorización MLOps',
      description: 'Observabilidad completa del ciclo de vida de modelos en producción',
      longDesc: 'Sistema centralizado de tracking de experimentos, monitorización de métricas y alertas de degradación. Integra MLflow, Grafana y alertas automáticas de retraining.',
      stack: ['Python', 'MLflow', 'Grafana', 'Prometheus', 'Kubernetes'],
      category: 'ML/IA', stars: 156, forks: 38,
      githubUrl: '#',
    },
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
