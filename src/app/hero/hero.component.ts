import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap,faPaperPlane, faMedal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  imports: [NgFor, FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  faGraduationCap = faGraduationCap;
  faPaperPlane = faPaperPlane;
  faMedal = faMedal;

  universities = [
    { name: 'McGill University', logo: 'public.icon1.png' },
    { name: 'Amity University', logo: 'public/icon2.png' },
    { name: 'University of Houston', logo: 'public/icon3.png' },
    { name: 'University of Plymouth', logo: 'public/icon4.png' }
  ];
}
