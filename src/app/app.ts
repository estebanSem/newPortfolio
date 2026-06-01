import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }    from './components/navbar/navbar';
import { HeroComponent }      from './components/hero/hero';
import { ProjectsComponent }  from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience';
import { EducationComponent } from './components/education/education';
import { ContactComponent }   from './components/contact/contact';
import { StackComponent }   from './components/stack/stack';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    StackComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-projects></app-projects>
      <app-stack></app-stack>
      <app-experience></app-experience>
      <app-education></app-education>
      <app-contact></app-contact>
    </main>
  `,
  styles: [`
    main { display: block; }
  `],
})
export class AppComponent {}
