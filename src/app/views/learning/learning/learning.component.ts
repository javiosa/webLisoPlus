import { Component, OnInit } from '@angular/core';
import {GalleryItem, ImageItem, YoutubeItem} from 'ng-gallery';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  images: GalleryItem[];
  constructor() { }

  ngOnInit(): void {
    // Set gallery items array
    this.images = [
      new YoutubeItem({ src: 'AsLijNNl9h8' }),
      new YoutubeItem({ src: 'dd9WGb9xKEo' }),
      new YoutubeItem({ src: 'lmUyZ_UxSFQ' })
  ];
  }

}
