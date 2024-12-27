/**
 * TestimonialsComponent
 * 
 * This component displays students review, 
 * including their appreciation and pictures.
 * 
 * Dependencies:
 * - FontAwesomeModule for icons
 * 
 * Functions:
 * -nextSlide() used to swipe to the next,
 * -previousSlide() used to swipe to previous slide
 */

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar,faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  imports: [FontAwesomeModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  faStar = faStar;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  currentSlide = 0; previousSlide() { 
      const totalSlides = document.querySelectorAll('.testimonial').length; 
      this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : totalSlides - 1; 
      this.updateSlidePosition(); 
    } 
    nextSlide() { 
      const totalSlides = document.querySelectorAll('.testimonial').length; 
      this.currentSlide = (this.currentSlide < totalSlides - 1) ? this.currentSlide + 1 : 0; 
      this.updateSlidePosition(); 
    } 
    updateSlidePosition() { 
      const testimonials = document.querySelectorAll('.testimonial'); 
      testimonials.forEach((testimonial, index) => { 
        (testimonial as HTMLElement).style.transform = `translateX(-${this.currentSlide * 100}%)`; 
  });
 }
}
