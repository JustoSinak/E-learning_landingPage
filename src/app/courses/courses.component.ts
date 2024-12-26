import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faClock,faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  imports: [FontAwesomeModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  faUser = faUser;
  faClock = faClock;
  faCartPlus = faCartPlus
  
}
