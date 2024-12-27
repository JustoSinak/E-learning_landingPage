/**
 * VidlectsComponent
 * 
 * This component represents the section of videos lecture,
 * 
 * Functions:
 * -ChangeMainVideo() used to switch from one video to the other. 
 *
 */


import { Component } from '@angular/core';


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
