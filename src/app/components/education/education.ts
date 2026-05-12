import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, GraduationCap, Award, ExternalLink, Calendar } from 'lucide-angular';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  type: 'degree';
}
interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  badge: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css'],
})
export class EducationComponent implements AfterViewInit {
  readonly GraduationCapIcon = GraduationCap;
  readonly AwardIcon = Award;
  readonly ExternalLinkIcon = ExternalLink;
  readonly CalendarIcon = Calendar;

  educations: Education[] = [
    {
      degree: 'Máster en Big Data & Data Science',
      institution: 'Universidad Politécnica de Madrid',
      period: '2017 — 2018',
      description: 'Especialización en arquitecturas de datos distribuidas, aprendizaje automático avanzado y sistemas de procesamiento en tiempo real. TFM sobre optimización de modelos de series temporales con LSTM.',
      type: 'degree',
    },
    {
      degree: 'Grado en Ingeniería Informática',
      institution: 'Universidad Complutense de Madrid',
      period: '2013 — 2017',
      description: 'Mención en Computación e Inteligencia Artificial. Premio extraordinario de fin de grado. Trabajo fin de grado sobre sistemas de recomendación basados en filtrado colaborativo.',
      type: 'degree',
    },
  ];

  certifications: Certification[] = [
    { name: 'Google Professional Data Engineer', issuer: 'Google Cloud', date: '2023', credentialUrl: '#', badge: 'GCP' },
    { name: 'AWS Certified Machine Learning – Specialty', issuer: 'Amazon Web Services', date: '2022', credentialUrl: '#', badge: 'AWS' },
    { name: 'Databricks Certified Associate Developer', issuer: 'Databricks', date: '2022', credentialUrl: '#', badge: 'DB' },
    { name: 'TensorFlow Developer Certificate', issuer: 'Google', date: '2021', credentialUrl: '#', badge: 'TF' },
    { name: 'Microsoft Certified: Azure Data Scientist', issuer: 'Microsoft', date: '2021', credentialUrl: '#', badge: 'AZ' },
    { name: 'Apache Kafka Developer Certification', issuer: 'Confluent', date: '2020', credentialUrl: '#', badge: 'MQ' },
  ];

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('#education .reveal').forEach(el => obs.observe(el));
  }
}
