import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Video {
  id: number;
  thumbnail: string;
  title: string;
}

@Component({
  selector: 'app-vidlects',
  imports: [],
  templateUrl: './vidlects.component.html',
  styleUrl: './vidlects.component.scss'
})
export class VidlectsComponent {
  mainVideo = 'assets/video1.mp4'; 
  
  changeMainVideo() {
     const currentMainVideo = this.mainVideo; 
  }
}
