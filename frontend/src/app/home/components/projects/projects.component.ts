import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonButton, IonAccordion, IonCardHeader, IonHeader, IonChip, IonLabel, IonToolbar, IonTitle, IonCard, IonImg, IonCardTitle, IonCardContent, IonCardSubtitle, IonAvatar } from '@ionic/angular/standalone';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonCardHeader, IonChip, IonLabel, IonCard, IonCardTitle, IonCardContent],
})

export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular and Ionic to showcase my projects and skills.',
      tags: ['Angular', 'Ionic', 'TypeScript', 'Spring Boot', 'Java'],
      githubUrl: 'https://github.com/PEmbarach/pablo-portfolio',
    },
    {
      title: 'MovieApp',
      description: 'A mobile application built with Ionic Framework v7.2.0 and Angular (Standalone Components) as part of the Higher Diploma in Science – Computing (Software Development) at Atlantic Technological University.',
      tags: ['Angular', 'Ionic', 'TypeScript', 'API'],
      githubUrl: 'https://github.com/PEmbarach/MovieApp'
    },
    {
      title: 'Project Cauldron',
      description: 'A task management application built with Angular and Ionic to help users organize and track their tasks effectively.',
      tags: ['JavaScript', 'Python', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/PEmbarach/Project-Cauldron'
    },
    {
      title: 'Coffeeie',
      description: 'Coffeeie is a community for coffee lovers. With the aim of sharing experiences and connecting people around Dublin. With a social network-style, that seeks interactivity between users, encouraging them to post their experiences. It was developed thinking of anyone who enjoys good coffee or is interested in coffee culture.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/PEmbarach/Coffeeie'
    }
  ];
  constructor() { }

}
