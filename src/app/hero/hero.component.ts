/**
 * HeroComponent
 * 
 * This component displays the main information Elearning platform
 * 
 * Dependencies:
 * - FontAwesomeModule for icons
 * - NgFor for iterating over arrays
 */

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

  /**
   * Exports different icons to be used in the html file
  */
  faGraduationCap = faGraduationCap;
  faPaperPlane = faPaperPlane;
  faMedal = faMedal;

  
}
