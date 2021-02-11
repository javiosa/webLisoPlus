import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  goTo: string;

  constructor() { }

  ngOnInit(): void {
    this.goTo = 'gaucher';
  }

}
