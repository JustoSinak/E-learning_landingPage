import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  universities = [
    { name: 'McGill University', logo: 'assets/mcgill-logo.png' },
    { name: 'Amity University', logo: 'assets/amity-logo.png' },
    { name: 'University of Houston', logo: 'assets/houston-logo.png' },
    { name: 'University of Plymouth', logo: 'assets/plymouth-logo.png' }
  ];
}
