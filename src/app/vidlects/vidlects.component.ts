import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Video {
  id: number;
  thumbnail: string;
  title: string;
}

@Component({
  selector: 'app-vidlects',
  imports: [NgFor],
  templateUrl: './vidlects.component.html',
  styleUrl: './vidlects.component.scss'
})
export class VidlectsComponent {
  videos: Video[] = [
    { id: 0, thumbnail: 'lect1.mp4', title: 'Lecture 1' },
    { id: 1, thumbnail: 'assets/lecture-2.jpg', title: 'Lecture 2' },
    { id: 2, thumbnail: 'assets/lecture-3.jpg', title: 'Lecture 3' }
  ];

  selectedVideo = 0;

  selectVideo(id: number): void {
    this.selectedVideo = id;
  }
}
