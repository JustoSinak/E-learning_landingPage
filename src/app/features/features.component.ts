import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faLaptop, faBook,faChalkboardTeacher,faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  imports: [FontAwesomeModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  faLaptop = faLaptop;
  faBook = faBook;
  faChalkboardTeacher = faChalkboardTeacher;
  faUsers = faUsers;
}
