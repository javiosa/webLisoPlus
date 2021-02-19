import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-disease-result',
  templateUrl: './disease-result.component.html',
  styleUrls: ['./disease-result.component.scss']
})
export class DiseaseResultComponent implements OnInit {

  @Input() data: object[];
  constructor() { }

  ngOnInit(): void {
  }

}
