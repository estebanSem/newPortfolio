import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Send, Github, Linkedin, Mail, MapPin, CheckCircle, Loader } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent implements AfterViewInit {
  readonly SendIcon = Send;
  readonly GithubIcon = Github;
  readonly LinkedinIcon = Linkedin;
  readonly MailIcon = Mail;
  readonly MapPinIcon = MapPin;
  readonly CheckIcon = CheckCircle;
  readonly LoaderIcon = Loader;

  formData = { name: '', email: '', subject: '', message: '' };
  isSubmitting = false;
  submitted = false;

  socials = [
    { icon: this.GithubIcon,    label: 'GitHub',   handle: '@datadev',  url: 'https://github.com' },
    { icon: this.LinkedinIcon,  label: 'LinkedIn', handle: '/in/datadev', url: 'https://linkedin.com' },
    { icon: this.MailIcon,      label: 'Email',    handle: 'hello@datadev.io', url: 'mailto:hello@datadev.io' },
  ];

  async onSubmit(): Promise<void> {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;
    this.isSubmitting = true;
    await new Promise(res => setTimeout(res, 1800));
    this.isSubmitting = false;
    this.submitted = true;
  }

  resetForm(): void {
    this.submitted = false;
    this.formData = { name: '', email: '', subject: '', message: '' };
  }

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('#contact .reveal').forEach(el => obs.observe(el));
  }
}
