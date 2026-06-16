import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonButton, IonAccordion, IonHeader, IonToolbar, IonTitle, IonCard, IonImg, IonCardTitle, IonCardContent, IonCardSubtitle, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
imports: [CommonModule, IonButton, IonAccordion, IonHeader, IonToolbar, IonTitle, IonCard, IonImg, IonCardTitle, IonCardContent, IonCardSubtitle, IonAvatar],
})
export class HeroComponent {

  name = 'Pablo Embarach';
  role = 'Full Stack Developer';
  tagline = ' Java - Angular - Typescript - Ionic - React - Node.js - SQL';
  githubUrl = 'https://github.com/PEmbarach';
  linkedinUrl = 'https://www.linkedin.com/in/pablo-embarach/';

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

}