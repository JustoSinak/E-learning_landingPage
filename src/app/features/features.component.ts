/**
 * FeaturesComponent
 * 
 * This component displays the features of the online public school, 
 * including statistics and a grid of feature cards.
 * 
 * Dependencies:
 * - FontAwesomeModule for icons
 * - NgFor for iterating over arrays
 */

import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faLaptop, faBook,faChalkboardTeacher,faUsers, faUserGroup,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [FontAwesomeModule, NgForOf],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  /**
   * Exports different icons to be used in the html file
  */
  faLaptop = faLaptop;
  faBook = faBook;
  faChalkboardTeacher = faChalkboardTeacher;
  faUsers = faUsers;
  faUserGroup = faUserGroup;
  faCalendar = faCalendar;
}
