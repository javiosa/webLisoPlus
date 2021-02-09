import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channelsection',
  templateUrl: './channelsection.component.html',
  styleUrls: ['./channelsection.component.scss']
})
export class ChannelsectionComponent implements OnInit {

  imageObject: Array<object> = [
    {
    video: 'https://youtu.be/AsLijNNl9h8' // Youtube url
    },
    {
      video: 'https://youtu.be/dd9WGb9xKEo', // MP4 Video url
    },
    {
      video: 'https://youtu.be/lmUyZ_UxSFQ',
      title: 'Enfermedad de Fabry'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
