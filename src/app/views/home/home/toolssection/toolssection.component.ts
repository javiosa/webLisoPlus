import { Component, OnInit } from '@angular/core';
import {tools} from '@models/data';

@Component({
  selector: 'app-toolssection',
  templateUrl: './toolssection.component.html',
  styleUrls: ['./toolssection.component.scss']
})
export class ToolssectionComponent implements OnInit {

  tools = tools;
  constructor() { }

  ngOnInit(): void {
  }

}
