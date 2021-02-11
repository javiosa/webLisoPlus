import { Component, OnInit } from '@angular/core';
import {TREE_ENFERMEDADES} from '@models/treeData';


@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  styleUrls: ['./enfermedades.component.scss']
})
export class EnfermedadesComponent implements OnInit {

  sections = TREE_ENFERMEDADES;

  constructor() {
  }
  ngOnInit(): void {
  }

}
