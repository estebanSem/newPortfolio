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
      role: 'Senior Data Scientist',
      company: 'TechScale Analytics',
      location: 'Madrid, España',
      period: 'Ene 2022 — Presente',
      current: true,
      highlights: [
        'Diseño e implementación de arquitectura de datos en tiempo real procesando +5M eventos/hora con Kafka y Spark Streaming.',
        'Liderazgo técnico del equipo de modelado predictivo (6 personas), implantando prácticas MLOps con reducción del 60% en tiempo de despliegue.',
        'Optimización de modelos de scoring crediticio: mejora del 18% en AUC-ROC respecto al benchmark anterior.',
        'Diseño de pipelines de feature engineering reutilizables en GCP Vertex AI, reduciendo el tiempo de experimentación en un 45%.',
      ],
      stack: ['Python', 'PySpark', 'GCP', 'Kafka', 'MLflow', 'dbt'],
    },
    {
      role: 'Data Engineer',
      company: 'DataStream Solutions',
      location: 'Barcelona, España',
      period: 'Mar 2020 — Dic 2021',
      current: false,
      highlights: [
        'Migración del Data Warehouse on-premise a arquitectura cloud (AWS Redshift), reduciendo costes operativos un 35%.',
        'Desarrollo de plataforma de ingestión de datos multi-fuente con Apache Airflow para 40+ fuentes heterogéneas.',
        'Implementación de data quality framework con Great Expectations, detectando anomalías en tiempo real.',
      ],
      stack: ['Python', 'Airflow', 'AWS', 'Redshift', 'dbt', 'SQL'],
    },
    {
      role: 'Data Analyst',
      company: 'Insights Corp',
      location: 'Madrid, España',
      period: 'Jun 2018 — Feb 2020',
      current: false,
      highlights: [
        'Análisis de cohortes y segmentación de clientes con clustering K-means para campaña de fidelización.',
        'Construcción de dashboards ejecutivos en Looker y Tableau con KPIs de negocio en tiempo real.',
        'Automatización de reporting mensual con Python, ahorrando 20h/mes de trabajo manual.',
      ],
      stack: ['Python', 'SQL', 'Tableau', 'Looker', 'Pandas'],
    },
  ];

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('#experience .reveal').forEach(el => obs.observe(el));
  }
}
