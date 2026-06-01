import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Layers, Cpu, Cloud, BarChart2, Database, Code2,
} from 'lucide-angular';

export interface SkillItem {
  name: string;
  level: number;   // 0–100  |  >= 80 → "Alto", < 80 → "Medio"
  logo?: string;   // URL de imagen (CDN o assets locales)
}

export interface StackCategory {
  id: string;
  label: string;
  icon: any;
  color: 'accent' | 'emerald' | 'purple' | 'amber' | 'coral' | 'blue';
  skills: SkillItem[];
}

// Devuelve el logo de SimpleIcons via CDN de jsDelivr
const si = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './stack.html',
  styleUrls: ['./stack.css'],
})
export class StackComponent implements AfterViewInit {
  readonly LayersIcon = Layers;
  readonly CpuIcon    = Cpu;
  readonly CloudIcon  = Cloud;
  readonly ChartIcon  = BarChart2;
  readonly DbIcon     = Database;
  readonly CodeIcon   = Code2;

  activeCategory: string | null = null;

  extraTools = [
    'Git', 'GitHub Actions', 'Terraform', 'Great Expectations',
    'FastAPI', 'Jupyter', 'VS Code', 'Prefect',
    'dvc', 'Ray', 'ONNX', 'Grafana', 'Prometheus',
  ];

  categories: StackCategory[] = [
    {
      id: 'languages',
      label: 'Lenguajes',
      icon: this.CodeIcon,
      color: 'accent',
      skills: [
        { name: 'Python',  level: 96, logo: si('python') },
        { name: 'SQL',     level: 92, logo: si('postgresql') },
        { name: 'Docker',     level: 92, logo: si('docker') },
        { name: 'C#',      level: 74, logo: si('csharp') },
        { name: 'TypeScript',       level: 68, logo: si('typescript') },
        { name: 'Bash',    level: 72, logo: si('gnubash') },
      ],
    },
    {
      id: 'bigdata',
      label: 'Big Data',
      icon: this.DbIcon,
      color: 'emerald',
      skills: [
        { name: 'PySpark', level: 93, logo: si('apachespark') },
        { name: 'Kafka',        level: 85, logo: si('apachekafka') },
        { name: 'Airflow',      level: 60, logo: si('apacheairflow') },
        { name: 'Hadoop',          level: 82, logo: si('apachehadoop') },
        { name: 'Flink',   level: 79, logo: si('apacheflink') },
        { name: 'HiveSQL',   level: 79, logo: si('apachehive') },
      ],
    },
    {
      id: 'ml',
      label: 'ML / IA',
      icon: this.CpuIcon,
      color: 'purple',
      skills: [
        { name: 'Scikit-learn',  level: 95, logo: si('scikitlearn') },
        { name: 'PyTorch',       level: 84, logo: si('pytorch') },
        { name: 'Mediapipe',   level: 78, logo: si('mediapipe') },
        { name: 'XGBoost',       level: 70, logo: si('xgboost') },
        { name: 'MLflow',        level: 50, logo: si('mlflow') },
        { name: 'Dagster',        level: 50, logo: si('dagster') },
        { name: 'Evidently',        level: 50, logo: si('evidentlyai') },
      ],
    },
    // {
    //   id: 'cloud',
    //   label: 'Cloud',
    //   icon: this.CloudIcon,
    //   color: 'blue',
    //   skills: [
    //     { name: 'GCP',        level: 89, logo: si('googlecloud') },
    //     { name: 'AWS',        level: 82, logo: si('amazonaws') },
    //     { name: 'Azure',      level: 71, logo: si('microsoftazure') },
    //     { name: 'Databricks', level: 85, logo: si('databricks') },
    //     { name: 'Kubernetes', level: 74, logo: si('kubernetes') },
    //   ],
    // },
    // {
    //   id: 'viz',
    //   label: 'Visualización',
    //   icon: this.ChartIcon,
    //   color: 'amber',
    //   skills: [
    //     { name: 'Tableau',      level: 87, logo: si('tableau') },
    //     { name: 'Looker',       level: 80, logo: si('looker') },
    //     { name: 'Plotly',       level: 83, logo: si('plotly') },
    //     { name: 'Streamlit',    level: 88, logo: si('streamlit') },
    //     { name: 'D3.js',        level: 62, logo: si('d3dotjs') },
    //   ],
    // },
    // {
    //   id: 'storage',
    //   label: 'Bases de datos',
    //   icon: this.LayersIcon,
    //   color: 'coral',
    //   skills: [
    //     { name: 'PostgreSQL',    level: 91, logo: si('postgresql') },
    //     { name: 'BigQuery',      level: 88, logo: si('googlebigquery') },
    //     { name: 'Snowflake',     level: 83, logo: si('snowflake') },
    //     { name: 'Redis',         level: 75, logo: si('redis') },
    //     { name: 'Elasticsearch', level: 70, logo: si('elasticsearch') },
    //   ],
    // },
  ];

  setActive(id: string): void {
    this.activeCategory = this.activeCategory === id ? null : id;
  }

  getActiveCategory(): StackCategory | undefined {
    return this.categories.find(c => c.id === this.activeCategory);
  }

  // Si la imagen SVG del CDN falla, muestra el fallback de texto
  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const fallback = img.nextElementSibling as HTMLElement;
    if (fallback) fallback.style.display = 'flex';
  }

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 },
    );
    document.querySelectorAll('#stack .reveal').forEach(el => obs.observe(el));
  }
}