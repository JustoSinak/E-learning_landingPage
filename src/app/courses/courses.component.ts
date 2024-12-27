/**
 * CoursesComponent
 * 
 * This component displays the available course of the Elearning platform
 * 
 * Dependencies:
 * - FontAwesomeModule for icons
 
 */

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faClock,faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  imports: [FontAwesomeModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  /**
   * Exports different icons to be used in the html file
  */
  faUser = faUser;
  faClock = faClock;
  faCartPlus = faCartPlus
  
}
