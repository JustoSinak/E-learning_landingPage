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
  faLaptop = faLaptop;
  faBook = faBook;
  faChalkboardTeacher = faChalkboardTeacher;
  faUsers = faUsers;
  faUserGroup = faUserGroup;
  faCalendar = faCalendar;
}
