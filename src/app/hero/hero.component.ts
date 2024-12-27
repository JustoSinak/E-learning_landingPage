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
    { name: 'McGill University', logo: 'assets/mcgill-logo.png' },
    { name: 'Amity University', logo: 'assets/amity-logo.png' },
    { name: 'University of Houston', logo: 'assets/houston-logo.png' },
    { name: 'University of Plymouth', logo: 'assets/plymouth-logo.png' }
  ];
}
