import { Component, OnInit } from '@angular/core';
import {faqs} from '@models/faqs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  questions = faqs;
  searchTerm: any = { question: '' };
  constructor() { }

  ngOnInit(): void {
  }

}
