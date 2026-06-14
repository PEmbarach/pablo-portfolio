import { Component } from '@angular/core';
import {HeroComponent} from './components/hero/hero.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ContactComponent} from './components/contact/contact.component';
import {IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [HeroComponent, ProjectsComponent, ContactComponent, IonContent],
})
export class HomePage {
  constructor() {}
}
