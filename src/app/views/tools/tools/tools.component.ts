import { Component, OnInit } from '@angular/core';
import {tools} from '@models/data';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  tools = tools;
  constructor() { }

  ngOnInit(): void {
  }

}
