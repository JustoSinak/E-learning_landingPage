/**
 * NavbarComponent
 * 
 * This component represents the navbar of the page, 
 * containing pages,logo, links, and subscription.
 * 
 * Dependencies:
 * FontAwesome to display icons
 */

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faE } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faE= faE;
}
