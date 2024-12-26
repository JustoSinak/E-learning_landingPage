import { Component } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [NgFor,NgClass],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  reviews = [
    {
      title: 'Love mathematics because of Besnik Academy',
      description: 'The curriculum was directly targeted toward applied techniques with high-profile projects – real datasets with industry partners. It helped me achieve my career transition goal.',
      name: 'Wilson Thai',
      location: 'Ontario, Canada',
      image: 'public/f1.jpg'
    },
    {
      title: 'There is so much to see and do all over world',
      description: 'The curriculum was directly targeted toward applied techniques with high-profile projects – real datasets with industry partners. It helped me achieve my career transition goal.',
      name: 'Milena Belmar',
      location: 'Argentina',
      image: 'public/f1.jpg'
    },
    // Add more reviews here
  ];
  currentIndex = 0;

  get visibleReviews() {
    return [this.reviews[this.currentIndex]];
  }

  nextReview() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  prevReview() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }
}
